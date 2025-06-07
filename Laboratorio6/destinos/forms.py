from django import forms
from .models import DestinoTuristico

class DestinoForm(forms.ModelForm):
    class Meta:
        model = DestinoTuristico
        fields = ['nombreCiudad', 'descripcionCiudad', 'imagenCiudad', 'precioTour', 'ofertaTour']
