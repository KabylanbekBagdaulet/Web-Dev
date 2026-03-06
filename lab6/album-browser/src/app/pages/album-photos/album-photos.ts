import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Photo { id: number; title: string; }

@Component({
  standalone: true,
  selector: 'app-album-photos',
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  albumId = signal<number>(0);
  photos = signal<Photo[]>([]);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumId.set(id);
    this.photos.set(
      Array.from({ length: 12 }, (_, i) => ({
        id: id * 100 + i + 1,
        title: `Photo ${i + 1}`
      }))
    );
  }

  back(): void { this.router.navigate(['/albums', this.albumId()]); }
}
