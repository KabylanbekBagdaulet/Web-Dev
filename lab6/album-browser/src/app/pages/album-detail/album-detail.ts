import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

const STORAGE_KEY = 'album_favorites';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album = signal<Album | null>(null);
  loading = signal(true);
  error = signal('');
  saving = signal(false);
  editedTitle = signal('');
  isFavorite = signal(false);

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isFavorite.set(this.loadFavorites().has(id));

    this.albumService.getAlbum(id).subscribe({
      next: (a) => {
        this.album.set(a);
        this.editedTitle.set(a.title);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load album');
        this.loading.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleFavorite(): void {
    const current = this.album();
    if (!current) return;
    const favs = this.loadFavorites();
    if (favs.has(current.id)) { favs.delete(current.id); } else { favs.add(current.id); }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favs]));
    this.isFavorite.set(favs.has(current.id));
  }

  save(): void {
    const current = this.album();
    if (!current) return;
    const title = this.editedTitle().trim();
    if (!title) { this.error.set('Title cannot be empty'); return; }
    this.saving.set(true);
    this.error.set('');
    const updatedAlbum: Album = { ...current, title };
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (resp) => {
        this.album.set({ ...resp, title });
        this.editedTitle.set(title);
        this.saving.set(false);
      },
      error: () => {
        this.error.set('Failed to update album');
        this.saving.set(false);
      }
    });
  }

  back(): void { this.router.navigate(['/albums']); }

  private loadFavorites(): Set<number> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set();
      return new Set(JSON.parse(raw));
    } catch { return new Set(); }
  }
}
