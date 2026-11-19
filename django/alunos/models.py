from django.db import models

# --- Create your models here ---

#criando a tabela no banco de dados e
#informando o django qual tipo de dados
#que serão armazenados e como validar esses dados.

class Curso(models.Model):
    #texto curto
    titulo = models.CharField(max_length = 100)
    #texto longo
    descricao = models.TextField
    #inteiro positivo
    carga_horaria = models.PositiveIntegerField
    #cmapos destinado a vagas
    vagas = models.PositiveIntegerField
    #texto com opções
    #definindo as opções de valores do campo
    STATUS_CHOICES = [("planejado", "Planejado"),
                      ("inscricoes","Inscricoes abertas"),
                      ("ativo","Ativo"),
                      ("encerrado","Encerrado"),
                    ]
    status = models.CharField(max_length = 20,
                              choices = STATUS_CHOICES,
                              default = "planejado"
                             )
    #valor da data
    data_inicio = models.DateField()

    nivel = models.CharField(max_length = 20,
                             default = "iniciante"
                            )
    
    def __str__(self):
        #reescreve o objeto para a forma de texto (converter texto/string)
        return self.titulo