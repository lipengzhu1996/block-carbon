from django.contrib.gis.db import models
from django.contrib.auth import get_user_model
from datetime import datetime

# Create your models here.


class Project(models.Model):
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE)
    create_time = models.DateTimeField(default=datetime.now)

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=20000)
    start_time = models.DateTimeField(default=None)
    polygon = models.PolygonField(default=None)
