import { Component, inject } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  private productService = inject(ProductService);

  categories: Category[] = this.productService.categories;
  products: Product[] = [];
  categoryId: number | null = null;

  selectCategory(id: number) {
    this.categoryId = id;

    this.products = this.productService.products.filter(p => p.categoryId === id);
  }

  onDeleteProduct(id: number) {

    this.products = this.products.filter(p => p.id !== id);
  }
}
