from django.db import models
from django.contrib.postgres.fields import ArrayField
from authentication.models import CustomUser


class Task(models.Model):
    name = models.CharField(max_length=128)
    start_time = models.TimeField()
    finish_time = models.TimeField()
    days = ArrayField(models.CharField(max_length=16), size=7)
    owner = models.ForeignKey(
        to=CustomUser, on_delete=models.CASCADE, related_name='task'
    )
