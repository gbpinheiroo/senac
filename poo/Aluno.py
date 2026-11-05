class Aluno:
   pass

aluno1 = Aluno()
aluno1.nome = "Gabriel"
aluno1.matricula = "83559"
aluno1.nota = 10

print(aluno1.nome)
print(aluno1.matricula)
print(aluno1.nota)

class AlunoPrimeiro:
    def __init__(self,nome1,matricula1,nota1):
        self.nome1 = nome1
        self.matricula1 = matricula1
        self.nota1 = nota1
        pass

aluno = AlunoPrimeiro("Gabriel Teste","12354",9)

print("----------------")
print(aluno.nome1) 
print(aluno.matricula1) 
print(aluno.nota1)


class AlunoTeste:
    def __init__(self,nome,matricula,nota):
        self.nome = nome
        self.matricula = matricula
        self.nota = nota
    def apresentar(self):
        print(f"Ola {self.nome}. Sua matricula é: {self.matricula}. e sua nota é {self.nota}")
        pass

alunoteste = AlunoTeste("Teste nome", "teste MAT", "teste NOTA")
    
alunoteste.apresentar()
