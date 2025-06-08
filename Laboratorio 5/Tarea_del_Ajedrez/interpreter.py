import pygame, sys
from pygame.locals import *
from .colors import *

SCALE = 2

def parseLine(DISPLAY, y, s):
  x = 0
  for c in s:
    pygame.draw.rect(DISPLAY, color[c], (x*SCALE, y*SCALE, SCALE, SCALE))
    x += 1

def draw(picture):
  try:
    img = picture.img
  except:
    img = picture
  pygame.init()

  ancho = len(img[0]) * SCALE
  alto = len(img) * SCALE
  DISPLAY = pygame.display.set_mode((ancho, alto))
  DISPLAY.fill(BLUE)

  for i in range(len(img)):
    parseLine(DISPLAY, i, img[i])

  while True:
    for event in pygame.event.get():
      if event.type==QUIT:
        pygame.quit()
        return
    pygame.display.update()