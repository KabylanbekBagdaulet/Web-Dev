import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Product, Category

c1 = Category.objects.create(name='Electronics')
c2 = Category.objects.create(name='Clothing')

Product.objects.create(name='Laptop', price=999.99, description='Good laptop', count=5, is_active=True, category=c1)
Product.objects.create(name='Phone', price=499.99, description='Smartphone', count=10, is_active=True, category=c1)