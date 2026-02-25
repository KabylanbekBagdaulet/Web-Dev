import { Component, input, output, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnInit {
  product = input.required<Product>();
  delete = output<number>();

  whatsapp: string = '';
  telegram: string = '';
  liked: boolean = false;
  allImages: string[] = [];
  currentImage: string = '';

  ngOnInit() {

    const link = encodeURIComponent(this.product().link);
    const name = encodeURIComponent(this.product().name);

    this.whatsapp = `https://wa.me/?text=Check out this product: ${link}`;
    this.telegram = `https://t.me/share/url?url=${link}&text=${name}`;


    this.allImages = [this.product().image, ...this.product().images];
    this.currentImage = this.product().image;
  }

  next() {
    let idx = this.allImages.indexOf(this.currentImage) + 1;
    if (idx >= this.allImages.length) idx = 0;
    this.currentImage = this.allImages[idx];
  }

  prev() {
    let idx = this.allImages.indexOf(this.currentImage) - 1;
    if (idx < 0) idx = this.allImages.length - 1;
    this.currentImage = this.allImages[idx];
  }

  like() {
    this.liked = !this.liked;

    this.liked ? this.product().likes++ : this.product().likes--;
  }

  remove() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product().id);
    }
  }
}
