from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def inicio (request):
    return render(request, 'alunos/inicio.html')

def cursos (request):
    return render(request, 'alunos/cursos.html')