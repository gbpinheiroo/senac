class Pessoa:
    def __init__(self, nome):
        self.nome = nome
    def dizerNome(self):
        print(self.nome)

class Aluno(Pessoa):
    def apresentar(self):
        print(f"Ola sou {self.nome}")

aluno = Aluno("Gabriel")

aluno.dizerNome()