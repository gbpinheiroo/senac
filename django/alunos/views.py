from django.shortcuts import render
from django.http import HttpResponse
from .models import Curso
# Create your views here.


def inicio(request):
       lista_cursos = [
        {'titulo': 'Python para Web', 'carga_horaria': 40, 'categoria':'TI'},
        {'titulo': 'Django Essencial', 'carga_horaria': 32, 'categoria':'TI'},
        {'titulo': 'Banco de Dados', 'carga_horaria': 24, 'categoria':'TI'},
        {'titulo': 'Folha de Pagamento', 'carga_horaria': 24, 'categoria':''},
    ]
       lista_cursos = Curso.objects.order_by("titulos")
       contexto = {'cursos': lista_cursos}

       return render(request,'alunos/inicio.html',contexto)

def cursos(request):
   lista_cursos = [
        {'titulo': 'Python para Web', 'carga_horaria': 40, 'categoria':'TI'},
        {'titulo': 'Django Essencial', 'carga_horaria': 32, 'categoria':'TI'},
        {'titulo': 'Banco de Dados', 'carga_horaria': 24, 'categoria':'TI'},
        {'titulo': 'Folha de Pagamento', 'carga_horaria': 24, 'categoria':''},
    ]
  
   contexto = {'cursos': lista_cursos}
   
   return render(request, 'alunos/cursos.html', contexto)


def sobre(request):
    return render(request, 'alunos/sobre.html')