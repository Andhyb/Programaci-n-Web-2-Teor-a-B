from Tarea_del_Ajedrez import chessPictures, interpreter

white = chessPictures.square
black = white.negative()

# construimos el patron blanco-negro
patron = white.join(black)
# hacemos que se repita 4 veces
resultado = patron.horizontalRepeat(4)

# Mostramos la imagen
interpreter.draw(resultado)