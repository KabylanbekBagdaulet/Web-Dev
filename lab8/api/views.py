from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(pk=id)
        return JsonResponse(list(Product.objects.filter(pk=id).values())[0])
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Nor Found'}, status = 404)

def category_list(request):
    categoties = Category.objects.all()
    data = list(categoties.values())
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    try:
        return JsonResponse(list(Category.objects.filter(pk=id).values())[0])
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not Found'}, status = 404)

def category_products(request, id):
    products = Product.objects.filter(category_id = id)
    data = list(products.values())
    return JsonResponse(data, safe= False)
