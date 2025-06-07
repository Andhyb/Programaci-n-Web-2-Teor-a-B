from django.urls import path
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('destinos/', views.lista_destinos, name='lista_destinos'),
    path('destinos/agregar/', views.agregar_destino, name='agregar_destino'),
    path('destinos/editar/<int:destino_id>/', views.editar_destino, name='editar_destino'),
    path('destinos/eliminar/<int:destino_id>/', views.eliminar_destino, name='eliminar_destino'),
    path('registro/', views.registro, name='registro'),
    path('login/', LoginView.as_view(template_name='destinos/login.html'), name='login'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
]