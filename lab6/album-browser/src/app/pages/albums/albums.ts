import { Component, OnInit, signal, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

const STORAGE_KEY = 'album_favorites';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums = signal<Album[]>([]);
  loading = signal(true);
  error = signal('');
  showFavoritesOnly = signal(false);
  favoriteIds = signal<Set<number>>(this.loadFavorites());

  favCount = computed(() => this.favoriteIds().size);

  displayedAlbums = computed(() =>
    this.showFavoritesOnly()
      ? this.albums().filter(a => this.favoriteIds().has(a.id))
      : this.albums()
  );

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    this.albumService.getAlbums().subscribe({
      next: (data) => { this.albums.set(data); this.loading.set(false); },
      error: () => { this.error.set('Failed to load albums'); this.loading.set(false); },
    });
  }

  navigate(id: number): void { this.router.navigate(['/albums', id]); }

  isFav(id: number): boolean { return this.favoriteIds().has(id); }

  toggleFav(event: MouseEvent, id: number): void {
    event.stopPropagation();
    const next = new Set(this.favoriteIds());
    if (next.has(id)) { next.delete(id); } else { next.add(id); }
    this.favoriteIds.set(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => { this.albums.set(this.albums().filter(a => a.id !== id)); },
      error: () => { this.error.set('Failed to delete album'); },
    });
  }

  private loadFavorites(): Set<number> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch { return new Set(); }
  }
}
