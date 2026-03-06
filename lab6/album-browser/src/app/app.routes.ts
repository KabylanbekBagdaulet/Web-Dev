import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { AlbumsComponent } from './pages/albums/albums';
import { AlbumDetailComponent } from './pages/album-detail/album-detail';
import { AlbumPhotosComponent } from './pages/album-photos/album-photos';
import { AlbumCreateComponent } from './pages/album-create/album-create';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/new', component: AlbumCreateComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },

  { path: '**', redirectTo: 'home' },
];
