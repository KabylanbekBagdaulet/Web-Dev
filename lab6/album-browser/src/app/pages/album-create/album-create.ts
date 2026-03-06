import { Component, signal, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album';

@Component({
  standalone: true,
  selector: 'app-album-create',
  imports: [FormsModule],
  templateUrl: './album-create.html',
  styleUrl: './album-create.css',
})
export class AlbumCreateComponent {
  private albumService = inject(AlbumService);
  private router = inject(Router);

  userId = signal<number>(1);
  title = signal<string>('');

  creating = signal(false);
  error = signal('');

  private isValid(): boolean {
    const uid = this.userId();
    const t = this.title().trim();
    if (!uid || uid < 1 || uid > 10) return false;
    if (t.length < 3) return false;
    return true;
  }

  submit(): void {
    this.error.set('');

    const uid = this.userId();
    const t = this.title().trim();

    if (!this.isValid()) {
      this.error.set('Please enter valid userId (1–10) and title (min 3 chars).');
      return;
    }

    this.creating.set(true);

    this.albumService.createAlbum({ userId: uid, title: t }).subscribe({
      next: () => {
        this.creating.set(false);
        this.router.navigate(['/albums']);
      },
      error: () => {
        this.error.set('Failed to create album');
        this.creating.set(false);
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/albums']);
  }
}
