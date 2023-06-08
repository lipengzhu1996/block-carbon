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
    overview = models.CharField(default=None, max_length=20000)
    registry = models.CharField(default=None, max_length=20000)
    accuracy_evaluation = models.CharField(default=None, max_length=20000)
    additionality_evaluation = models.CharField(default=None, max_length=20000)
    permanence_evaluation = models.CharField(default=None, max_length=20000)
    leakage_evaluation = models.CharField(default=None, max_length=20000)
    cobenefit_evaluation = models.CharField(default=None, max_length=20000)
    story = models.CharField(default=None, max_length=20000)

    tilesets = JSONField(default=None)
    # start_time = models.DateTimeField(default=None)
    # polygon = models.PolygonField(default=None)
