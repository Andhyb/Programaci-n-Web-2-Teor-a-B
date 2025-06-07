from django.urls import path
from . import views

urlpatterns = [
    path('destinos/', views.lista_destinos, name='lista_destinos'),
    path('destinos/agregar/', views.agregar_destino, name='agregar_destino'),
]