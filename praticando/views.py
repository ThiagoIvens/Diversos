from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def verificaCpf(request):
    return render(request, 'Geral/verifica_cpf.html')