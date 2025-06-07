from django import forms
from .models import DestinoTuristico
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class DestinoForm(forms.ModelForm):
    class Meta:
        model = DestinoTuristico
        fields = ['nombreCiudad', 'descripcionCiudad', 'imagenCiudad', 'precioTour', 'ofertaTour']

class RegistroUsuarioForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
