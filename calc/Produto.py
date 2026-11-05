class Produto:
    categoria = "Info"
    def __init__(self,nome):
        self.nome = nome
        pass

teclado = Produto("teclado")
mouse = Produto("mouse")

print(teclado.nome)
print(mouse.nome)
      