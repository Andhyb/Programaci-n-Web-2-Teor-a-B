from Tarea_del_Ajedrez import chessPictures, interpreter

# Obtener caballo blanco
white_knight = chessPictures.knight
# Crear caballo negro aplicando negativo
black_knight = white_knight.negative()

# Construir las dos filas
fila1 = white_knight.join(black_knight)
fila2 = white_knight.verticalMirror().join(black_knight.verticalMirror())

# Unir arriba y abajo
resultado = fila2.up(fila1)


# Mostrar la imagen resultante
interpreter.draw(resultado)