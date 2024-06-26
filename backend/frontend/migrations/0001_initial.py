# Generated by Django 4.1.5 on 2023-06-08 03:45

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import frontend.models
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('create_time', models.DateTimeField(default=datetime.datetime.now)),
                ('id', models.CharField(default=frontend.models.id_gen, editable=False, max_length=12, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('overview', models.CharField(default=None, max_length=20000)),
                ('registry', models.CharField(default=None, max_length=20000)),
                ('accuracy_evaluation', models.CharField(default=None, max_length=20000)),
                ('additionality_evaluation', models.CharField(default=None, max_length=20000)),
                ('permanence_evaluation', models.CharField(default=None, max_length=20000)),
                ('leakage_evaluation', models.CharField(default=None, max_length=20000)),
                ('cobenefit_evaluation', models.CharField(default=None, max_length=20000)),
                ('story', models.CharField(default=None, max_length=20000)),
                ('tilesets', jsonfield.fields.JSONField(default=None)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
