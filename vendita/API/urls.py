from rest_framework import routers
from .api import BookViewSet

router = routers.DefaultRouter()

router.register('/books', BookViewSet, 'Books')

urlpatterns = router.urls