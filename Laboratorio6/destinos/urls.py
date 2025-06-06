from django.urls import path
from . import views

urlpatterns = [
    path('destinos/', views.lista_destinos, name='lista_destinos'),
]