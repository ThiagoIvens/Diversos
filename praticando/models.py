from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class User(models.Model):
    nome = models.CharField(max_length=100)
    password = models.CharField(max_length=25)
    cpf = models.CharField(max_length=11)
    email = models.EmailField()

    def __str__(self):
        return self.nome