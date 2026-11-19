from django.contrib import admin
from .models import Curso

# Register your models here.

#definindo o que sera mostrado
#na tabela para visualização do user
@admin.register(Curso)
#classe que o django se baseara para mostrar os dados
class CursoAdmin(admin.ModelAdmin):
    list_display=(
        "titulo",
        "carga_horaria",
        "vagas",
        "data_inicio",
        "nivel",
        "status",
    )