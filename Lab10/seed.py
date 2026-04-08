import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Product, Category

electronics = Category.objects.create(name='Electronics')
clothing = Category.objects.create(name='Clothing')
books = Category.objects.create(name='Books')
sports = Category.objects.create(name='Sports')

Product.objects.create(name='Laptop', price=999.99, description='Powerful laptop', count=10, is_active=True, category=electronics)
Product.objects.create(name='Phone', price=499.99, description='Smartphone', count=25, is_active=True, category=electronics)
Product.objects.create(name='Headphones', price=79.99, description='Wireless headphones', count=50, is_active=True, category=electronics)
Product.objects.create(name='Tablet', price=349.99, description='Android tablet', count=15, is_active=True, category=electronics)
Product.objects.create(name='Smartwatch', price=199.99, description='Smart watch', count=30, is_active=True, category=electronics)
Product.objects.create(name='T-Shirt', price=19.99, description='Cotton t-shirt', count=100, is_active=True, category=clothing)
Product.objects.create(name='Jeans', price=49.99, description='Blue jeans', count=60, is_active=True, category=clothing)
Product.objects.create(name='Jacket', price=89.99, description='Winter jacket', count=40, is_active=True, category=clothing)
Product.objects.create(name='Sneakers', price=69.99, description='Sports sneakers', count=35, is_active=True, category=clothing)
Product.objects.create(name='Hoodie', price=39.99, description='Comfortable hoodie', count=80, is_active=True, category=clothing)
Product.objects.create(name='Python Book', price=29.99, description='Learn Python', count=20, is_active=True, category=books)
Product.objects.create(name='Django Book', price=34.99, description='Learn Django', count=15, is_active=True, category=books)
Product.objects.create(name='JavaScript Book', price=27.99, description='Learn JavaScript', count=25, is_active=True, category=books)
Product.objects.create(name='Clean Code', price=24.99, description='Best practices', count=30, is_active=True, category=books)
Product.objects.create(name='React Book', price=32.99, description='Learn React', count=18, is_active=True, category=books)
Product.objects.create(name='Football', price=24.99, description='Size 5 football', count=45, is_active=True, category=sports)
Product.objects.create(name='Basketball', price=29.99, description='NBA size ball', count=30, is_active=True, category=sports)
Product.objects.create(name='Tennis Racket', price=59.99, description='Pro racket', count=20, is_active=True, category=sports)
Product.objects.create(name='Yoga Mat', price=19.99, description='Non-slip mat', count=55, is_active=True, category=sports)
Product.objects.create(name='Dumbbells', price=39.99, description='5kg pair', count=25, is_active=True, category=sports)


