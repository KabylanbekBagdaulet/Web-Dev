import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products = input.required<Product[]>();


  deleteProduct = output<number>();

  onDelete(id: number) {
    this.deleteProduct.emit(id);
  }
}
