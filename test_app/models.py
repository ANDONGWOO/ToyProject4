from django.db import models
from django.conf import settings

class Article(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
