from django.urls import path
from . import views

urlpatterns = [
    path('verifica-cpf/', views.verificaCpf, name='verfica_cpf' ),
]