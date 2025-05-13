from Tarea_del_Ajedrez import chessPictures, interpreter

white = chessPictures.square
black = white.negative()

# construimos el patron blanco-negro
patron = black.join(white)
# repetimos 4 veces
resultado = patron.horizontalRepeat(4)

# Mostramos la imagen
interpreter.draw(resultado)