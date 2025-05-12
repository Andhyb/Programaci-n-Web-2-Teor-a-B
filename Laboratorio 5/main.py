from Tarea_del_Ajedrez import chessPictures, interpreter

# Obtener caballo blanco
white_knight = chessPictures.knight
# Crear caballo negro aplicando negativo
black_knight = white_knight.negative()

# Construir las dos filas
fila1 = white_knight.join(black_knight)
fila2 = black_knight.join(white_knight)

# Aplicar espejo horizontal (para ejercicio b)
resultado = combinado.horizontalMirror()

# Mostrar la imagen resultante
interpreter.draw(resultado)