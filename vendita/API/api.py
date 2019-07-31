from rest_framework.decorators import action
from rest_framework import viewsets, permissions, status
from API.models import Book
from .serializers import BookSerializer


# Lead Viewset
class BookViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = BookSerializer

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return self.request.user.books.all()
        else:
            return Book.objects.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
