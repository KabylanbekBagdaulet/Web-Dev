import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product !: Product;

  shareToWhatsapp(){
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareToTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

}
