from django.db import models
from PIL import Image


class Lead(models.Model):
    name = models.CharField(max_length=100, default='SOME BOOK NAME')
    author = models.CharField(max_length=100, default='SOME AUTHOR')
    discrition = models.TextField(max_length=1000, blank=True)
    created_at = models.DateField()
    cost = models.IntegerField(default=0)
    is_hot_price = models.BooleanField(default=False)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def save(self, *args, **kwargs):
        super().save()

        img = Image.open(self.image.path)

        output_size = (300, 300)

        img.thumbnail(output_size)
        img.save(self.image.path)
