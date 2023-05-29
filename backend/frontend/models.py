# from django.contrib.gis.db import models
from django.db import models
from django.contrib.auth import get_user_model
from datetime import datetime
from jsonfield import JSONField
import uuid

ID_LENGTH = 12
# Create your models here.


def id_gen() -> str:
    """Generates random string whose length is `ID_LENGTH`"""
    return str(uuid.uuid4().int)[:ID_LENGTH]


class Project(models.Model):
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE)
    create_time = models.DateTimeField(default=datetime.now)
    id = models.CharField(max_length=ID_LENGTH,
                          primary_key=True, default=id_gen, editable=False)

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=20000)
    tif_links = JSONField(default=None)
    # start_time = models.DateTimeField(default=None)
    # polygon = models.PolygonField(default=None)
