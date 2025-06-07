from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from django.contrib.auth import login
from .forms import RegistroUsuarioForm
from django.contrib.auth.decorators import login_required

from django.shortcuts import render
from .models import DestinoTuristico
from .forms import DestinoForm

@login_required
def lista_destinos(request):
    destinos = DestinoTuristico.objects.all()
    return render(request, 'destinos/lista_destinos.html', {'destinos': destinos})

@login_required
def agregar_destino(request):
    if request.method == 'POST':
        form = DestinoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('lista_destinos')  # redirige al listado después de guardar
    else:
        form = DestinoForm()
    return render(request, 'destinos/agregar_destino.html', {'form': form})

@login_required
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

@login_required
def eliminar_destino(request, destino_id):
    destino = get_object_or_404(DestinoTuristico, id=destino_id)
    if request.method == 'POST':
        destino.delete()
        return redirect('lista_destinos')
    return render(request, 'destinos/eliminar_destino.html', {'destino': destino})

def registro(request):
    if request.method == 'POST':
        form = RegistroUsuarioForm(request.POST)
        if form.is_valid():
            usuario = form.save()
            login(request, usuario)  # inicia sesión automáticamente
            return redirect('lista_destinos')
    else:
        form = RegistroUsuarioForm()
    return render(request, 'destinos/registro.html', {'form': form})
