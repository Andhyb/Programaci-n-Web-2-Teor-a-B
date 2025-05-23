from .colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for value in self.img:
    	vertical.append(value[::-1])
    return Picture(vertical)

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    mirrored = []
    for i in range(len(self.img)-1, -1, -1):
        mirrored.append(self.img[i])
    return Picture(mirrored)

  def negative(self):
    """ Devuelve un negativo de la imagen """
    negative_img = []
    for line in self.img:
      negative_line = ''.join([self._invColor(c) for c in line])
      negative_img.append(negative_line)
    return Picture(negative_img)

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    joined = [self.img[i] + p.img[i] for i in range(len(self.img))]
    return Picture(joined)

  def up(self, p):
    return Picture(p.img + self.img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    result = []
    for y in range(len(self.img)):
        linea = ''
        for x in range(len(self.img[y])):
            # Si el carácter de la figura p NO es un espacio, lo colocamos sobre el fondo
            if p.img[y][x] != ' ':
                linea += p.img[y][x]
            else:
                linea += self.img[y][x]
        result.append(linea)
    return Picture(result)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    repetido = [line * n for line in self.img]
    return Picture(repetido)

  def verticalRepeat(self, n):
    return Picture(self.img * n)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)