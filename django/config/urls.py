# config/urls.py
from django.contrib import admin
from django.urls import include, path
from alunos import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("alunos.urls")),
]
