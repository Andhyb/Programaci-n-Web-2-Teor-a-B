from Tarea_del_Ajedrez import chessPictures, interpreter

white = chessPictures.square
black = white.negative()

# construimos la fila blanco - negro ...
fila1 = white.join(black).horizontalRepeat(4)
# construimos la fila negro - blanco ...
fila2 = black.join(white).horizontalRepeat(4)

# Alternar filas: fila2 arriba, fila1 debajo y repetido 4 veces
tablero = fila2.up(fila1).verticalRepeat(4)

# Mostramos la imagen
interpreter.draw(tablero)