# alunos/views.py​

from django.shortcuts import render


def inicio(request):
    return render(request, "alunos/index.html")


def cursos(request):
    lista_cursos = [
        {"titulo": "Python para Web", "carga_horaria": 40},
        {"titulo": "Django Essencial", "carga_horaria": 32},
        {"titulo": "Banco de Dados", "carga_horaria": 24},
    ]
    contexto = {"cursos": lista_cursos}

    return render(request, "alunos/cursos.html", contexto)
