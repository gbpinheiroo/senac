class Calculadora:
    def somar(self, num1, num2):
        return num1+num2
    def subt(self, num1, num2):
        return num1-num2
    def divide(self, num1, num2):
        return num1/num2
    def multi(self, num1, num2):
        return num1*num2
    
c1 = Calculadora()

print(c1.somar(10,20))
print(c1.subt(10,20))
print(c1.divide(10,20))
print(c1.multi(10,20))




