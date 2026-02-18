import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../models/product.model';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: "iPhone 15",
      description: 'Флагманский смартфон с титановым корпусом и мощным процессором A17 Pro.',
      price: 550000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 2,
      name: "iPhone 17 Pro",
      description: "оплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей",
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      price: 768000,
      rating: 5.0
    },
    {
      id: 3,
      name: "Samsung Galaxy A07",
      description: 'универсальный смартфон для активной жизни, сочетающий большой экран, ёмкий аккумулятор и современные функции',
      price: 66665,
      rating: 3.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pcd/pdd/61291713.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p95/pdd/61291711.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p22/pde/61291716.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-lavandovyi-144817894/?c=750000000'
    },
    {
      id: 4,
      name: "OPPO A78",
      description: 'Смартфон с высокой производительностью',
      price: 85920,
      rating: 2.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf2/pfc/64346866.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pfc/64346868.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p31/pfa/64346870.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000'
    },
    {
      id: 5,
      name: "Xiaomi Redmi 15",
      description: 'это мощный и стильный смартфон с большим экраном и ёмким аккумулятором, созданный для активных пользователей',
      price: 94990,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/p26/71079940.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p10/p2c/99150918.PNG?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p4c/p2a/71079953.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf5/p2a/71079959.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-15-4g-8-gb-256-gb-chernyi-146822502/?c=750000000'
    },
    {
      id: 6,
      name: "Samsung Galaxy S25 Ultra",
      description: "С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой",
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p27/20120111.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd1/p27/20120115.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      price: 768000,
      rating: 5.0
    },
    {
      id: 7,
      name: "iPhone 17 Pro Max",
      description: " это воплощение инноваций и стиля, предлагающее передовые технологии и безупречный пользовательский опыт",
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/p70/74064263.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p70/74064264.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa1/p70/74064265.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p70/74064266.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-dual-esim-temno-sinii-148426100/?c=750000000',
      price: 790000,
      rating: 5.0
    },
    {
      id: 7,
      name: "Samsung Galaxy A26",
      description: " это мощный и стильный смартфон с поддержкой сетей пятого поколения, который станет вашим надёжным помощником в повседневной жизни",
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/p38/30556010.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p77/p38/30556012.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p38/30556013.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p07/p38/30556016.png?format=gallery-medium'
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a26-5g-8-gb-256-gb-belyi-136435860/?c=750000000",
      price: 127000,
      rating: 4.2
    }
  ]
}
