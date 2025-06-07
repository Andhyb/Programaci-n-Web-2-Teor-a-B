from django.shortcuts import render, redirect

from django.shortcuts import render
from .models import DestinoTuristico
from .forms import DestinoForm

def lista_destinos(request):
    destinos = DestinoTuristico.objects.all()
    return render(request, 'destinos/lista_destinos.html', {'destinos': destinos})

def agregar_destino(request):
    if request.method == 'POST':
        form = DestinoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('lista_destinos')  # redirige al listado después de guardar
    else:
        form = DestinoForm()
    return render(request, 'destinos/agregar_destino.html', {'form': form})
