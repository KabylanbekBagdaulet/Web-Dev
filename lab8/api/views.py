from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer 

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    @action(detail=True, methods=['get'], url_path='products')
    
    def products(self, request, pk = None):
        category = self.get_object()
        qs = Product.objects.filter(category = category)
        
        serializer = ProductSerializer(qs, many = True)
        return Response(serializer.data)
    