from django.shortcuts import render

from django.shortcuts import render
from .models import DestinoTuristico

def lista_destinos(request):
    destinos = DestinoTuristico.objects.all()
    return render(request, 'destinos/lista_destinos.html', {'destinos': destinos})
