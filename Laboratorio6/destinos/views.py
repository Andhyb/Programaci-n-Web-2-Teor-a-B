from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404

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

def editar_destino(request, destino_id):
    destino = get_object_or_404(DestinoTuristico, id=destino_id)
    if request.method == 'POST':
        form = DestinoForm(request.POST, request.FILES, instance=destino)
        if form.is_valid():
            form.save()
            return redirect('lista_destinos')
    else:
        form = DestinoForm(instance=destino)
    return render(request, 'destinos/editar_destino.html', {'form': form})
