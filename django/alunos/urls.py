
from django.urls import path
from . import views

app_name="alunos"

urlpatterns = [
    path('',views.inicio, name="inicio"),
    path('cursos/',views.cursos,name= "cursos"),
    path('sobre/', views.sobre, name="sobre")
]