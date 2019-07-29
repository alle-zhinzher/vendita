from API.models import Book
from rest_framework import viewsets, permissions
from .serializers import BookSerializer


# Lead Viewset
class BookViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = BookSerializer

    def get_queryset(self):
        return self.request.user.books.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)