# Generated by Django 4.1.5 on 2023-01-17 04:13

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0009_auto_20230117_0406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='uuid',
            field=models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, unique=True),
        ),
    ]