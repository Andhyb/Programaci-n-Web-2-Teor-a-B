from django.db import models

class DestinoTuristico(models.Model):
    nombreCiudad = models.CharField(max_length=100)
    descripcionCiudad = models.TextField()
    imagenCiudad = models.ImageField(upload_to='imagenes_destinos/')
    precioTour = models.DecimalField(max_digits=10, decimal_places=2)
    ofertaTour = models.BooleanField(default=False)

    def __str__(self):
        return self.nombreCiudad
