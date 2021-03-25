import pygame
import time

display_height = 600
display_width = 800
black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)

pygame.init()

gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption('Chain Reaction')

gameDisplay.fill(white)
pygame.display.update


def text_objects(text, font):
    textSurface = font.render(text, True, black)
    return textSurface, textSurface.get_rect()


def message_display(text, x, y, size):
    largeText = pygame.font.SysFont('comicsansms', size)
    TextSurf, TextRect = text_objects(text, largeText)
    TextRect.center = (x, y)
    gameDisplay.blit(TextSurf, TextRect)

    pygame.display.update()


def single_click(color, center):
    x, y = center
    pygame.draw.circle(gameDisplay, color, (x+25, y+25), 8)


def double_click(color, center):
    x, y = center
    pygame.draw.circle(gameDisplay, color, (x+20, y+25), 8)
    pygame.draw.circle(gameDisplay, color, (x+30, y+25), 8)


def triple_click(color, center):
    x, y = center
    pygame.draw.circle(gameDisplay, color, (x+20, y+20), 8)
    pygame.draw.circle(gameDisplay, color, (x+30, y+20), 8)
    pygame.draw.circle(gameDisplay, color, (x+25, y+30), 8)


def display_rect(color, start_x, start_y, end_x, end_y):
    pygame.draw.rect(gameDisplay, color, [start_x, start_y, end_x, end_y])


def display_name():
    size = 22
    x = 75
    message_display('Siddhant', x, 100, size)
    message_display('Siddhant', x, 130, size)
    message_display('Siddhant', x, 160, size)
    message_display('Siddhant', x, 190, size)

    pygame.display.update()


def get_block():
    x = 250
    coordinates = {}
    for i in range(6):
        y = 50
        for j in range(9):
            coordinates[(x, y)] = (j, i)
            y += 50
        x += 50
    return coordinates


def display_board():
    x = 250
    y = 50
    line_width = 1
    display_rect(black, x, y, 300, 450)

    for i in range(8):
        y += 50
        display_rect(red, x, y, 300, line_width)
    y = 50
    for i in range(5):
        x += 50
        display_rect(red, x, y, line_width, 450)

    pygame.display.update()


def game_loop():
    cord_dict = get_block()
    x, y = (0, 0)
    move = []
    for i in range(9):
        x = []
        for j in range(6):
            x.append(0)
        move.append(x)

    display_name()
    display_board()
    while True:
        for event in pygame.event.get():
            mouse = pygame.mouse.get_pos()
            click = pygame.mouse.get_pressed()
            if click[0] == 1:
                x, y = mouse
                a = x % 50
                b = y % 50
                x, y = x-a, y-b
                move_x, move_y = cord_dict[(x, y)]
                if move[move_x][move_y] == 0:
                    single_click(white, (x, y))
                elif move[move_x][move_y] == 1:
                    double_click(white, (x, y))
                elif move[move_x][move_y] == 2:
                    triple_click(white, (x, y))
                else:
                    pass
                move[move_x][move_y] += 1
                pygame.display.update((x, y, 50, 50))


game_loop()
