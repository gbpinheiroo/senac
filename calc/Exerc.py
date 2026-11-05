class Aluno:
    def __init__(self, nome, n1, n2, n3, n4):
        self.nome = nome
        self.n1 = n1
        self.n2 = n2
        self.n3 = n3
        self.n4 = n4
        
    def calcularMedia(self):
        return (self.n1 + self.n2 + self.n3 + self.n4)/4
    
    def mostrarResultado(self):
        print(f"{self.nome} ficou com media {self.calcularMedia()}")
        
aluno1 = Aluno("Gabriel",10,10,6,6)
aluno1.mostrarResultado()
