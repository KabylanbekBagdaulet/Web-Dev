from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views.fbv import products_list, product_detail

router = DefaultRouter()
router.register('products', views.ProductViewSet) 
router.register('categories', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('v2/products/', products_list),
    path('v2/products/<int:product_id>/', product_detail),
]


