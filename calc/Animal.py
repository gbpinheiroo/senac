class Cachorro:
    def emitirSom(self):
        print("Au Au")

class Gato:
    def emitirSom(self):
        print("Miau Miau") 

for animal in [Cachorro(), Gato()]:

    animal.emitirSom()
