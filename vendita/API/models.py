from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Book(models.Model):
    name = models.CharField(max_length=100, default='SOME BOOK NAME')
    author = models.CharField(max_length=100, default='SOME AUTHOR')
    genre = models.CharField(max_length=100, default='SOME GENRE')
    discrition = models.TextField(max_length=1000, blank=True)
    pages = models.IntegerField(default=0)
    created_at = models.DateField()
    cost = models.IntegerField(default=0)
    is_hot_price = models.BooleanField(default=False)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    owner = models.ForeignKey(User, related_name='books', on_delete=models.CASCADE, null=True)
    customer = models.ForeignKey(User,
                                 related_name='books_customer',
                                 on_delete=models.CASCADE,
                                 null=True)

    def save(self, *args, **kwargs):
        super().save()

        img = Image.open(self.image.path)

        output_size = (300, 300)

        img.thumbnail(output_size)
        img.save(self.image.path)
