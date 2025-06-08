from Tarea_del_Ajedrez import chessPictures, interpreter

w = chessPictures

# Colores de casillas
blanco = w.square
negro = blanco.negative()

# Piezas negras
piezas_negras = [
    w.rock.negative(), w.knight.negative(), w.bishop.negative(), w.queen.negative(),
    w.king.negative(), w.bishop.negative(), w.knight.negative(), w.rock.negative()
]
peones_negros = [w.pawn.negative()] * 8

# Piezas blancas
piezas_blancas = [
    w.rock, w.knight, w.bishop, w.queen,
    w.king, w.bishop, w.knight, w.rock
]
peones_blancos = [w.pawn] * 8

# Función para colocar piezas sobre casillas intercaladas
def colocar_en_casillas(piezas, empieza_blanco=True):
    fila = None
    for i, pieza in enumerate(piezas):
        casilla = blanco if (i % 2 == 0) == empieza_blanco else negro
        combinada = casilla.under(pieza)
        fila = combinada if fila is None else fila.join(combinada)
    return fila

# Fila de piezas negras (arriba)
fila_piezas_negras = colocar_en_casillas(piezas_negras, empieza_blanco=True)

# Fila de peones negros
fila_peones_negros = colocar_en_casillas(peones_negros, empieza_blanco=False)

# Fila de peones blancos
fila_peones_blancos = colocar_en_casillas(peones_blancos, empieza_blanco=True)

# Fila de piezas blancas (abajo)
fila_piezas_blancas = colocar_en_casillas(piezas_blancas, empieza_blanco=False)

# 4 filas del centro (estas estan sin fichas solo son cuadros de tablero)
fila1 = blanco.join(negro).horizontalRepeat(4)
fila2 = negro.join(blanco).horizontalRepeat(4)
centro = fila1.up(fila2).verticalRepeat(2)

# Unimos todo el tablero
tablero = fila_piezas_negras.up(fila_peones_negros).up(centro).up(fila_peones_blancos).up(fila_piezas_blancas)

# Mostrar la imagen
interpreter.draw(tablero)
