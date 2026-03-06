import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  // Ключи для LocalStorage
  private readonly STORAGE_KEYS = {
    CREATED: 'my_albums_created',
    DELETED: 'my_albums_deleted',
    OVERRIDES: 'my_albums_overrides'
  };

  private createdAlbums: Album[] = [];
  private deletedIds = new Set<number>();
  private titleOverrides = new Map<number, string>();

  constructor(private http: HttpClient) {
    this.loadFromStorage(); // Загружаем данные при старте приложения
  }

  // --- ЛОГИКА СОХРАНЕНИЯ ---

  private saveToStorage() {
    localStorage.setItem(this.STORAGE_KEYS.CREATED, JSON.stringify(this.createdAlbums));
    localStorage.setItem(this.STORAGE_KEYS.DELETED, JSON.stringify(Array.from(this.deletedIds)));
    localStorage.setItem(this.STORAGE_KEYS.OVERRIDES, JSON.stringify(Array.from(this.titleOverrides.entries())));
  }

  private loadFromStorage() {
    const created = localStorage.getItem(this.STORAGE_KEYS.CREATED);
    if (created) this.createdAlbums = JSON.parse(created);

    const deleted = localStorage.getItem(this.STORAGE_KEYS.DELETED);
    if (deleted) this.deletedIds = new Set(JSON.parse(deleted));

    const overrides = localStorage.getItem(this.STORAGE_KEYS.OVERRIDES);
    if (overrides) this.titleOverrides = new Map(JSON.parse(overrides));
  }

  // --- МЕТОДЫ СЕРВИСА ---

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      map((albums) => {
        const filtered = albums.filter(a => !this.deletedIds.has(a.id));
        const patched = filtered.map(a => ({
          ...a,
          title: this.titleOverrides.get(a.id) ?? a.title
        }));
        const local = this.createdAlbums.filter(a => !this.deletedIds.has(a.id));
        return [...local, ...patched];
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    const local = this.createdAlbums.find(a => a.id === id);
    if (local) {
      return of({
        ...local,
        title: this.titleOverrides.get(local.id) ?? local.title
      });
    }

    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`).pipe(
      map(a => ({
        ...a,
        title: this.titleOverrides.get(a.id) ?? a.title
      }))
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  createAlbum(payload: { userId: number; title: string }): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/albums`, payload).pipe(
      map((created) => {
        const newAlbum = {
          ...created,
          id: Date.now(), // Используем timestamp, так как API всегда возвращает ID 101
          userId: payload.userId,
          title: payload.title
        };
        this.createdAlbums = [newAlbum, ...this.createdAlbums];
        this.saveToStorage(); // Сохраняем
        return newAlbum;
      })
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    // Сохраняем измененный заголовок в Map
    this.titleOverrides.set(album.id, album.title);

    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      map((resp) => {
        const idx = this.createdAlbums.findIndex(a => a.id === album.id);
        if (idx !== -1) {
          this.createdAlbums[idx] = { ...this.createdAlbums[idx], title: album.title };
        }
        this.saveToStorage(); // Сохраняем изменения в localStorage
        return { ...resp, title: album.title };
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    this.deletedIds.add(id);
    this.titleOverrides.delete(id);
    this.createdAlbums = this.createdAlbums.filter(a => a.id !== id);
    this.saveToStorage(); // Сохраняем состояние после удаления

    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}