from Tarea_del_Ajedrez import chessPictures, interpreter

# Obtenemos la reina blanca
queen = chessPictures.queen

# La repetimos 4 veces
resultado = queen.horizontalRepeat(4)

# Mostramos la imagen
interpreter.draw(resultado)