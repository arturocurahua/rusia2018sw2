from django.db import models
#agregando a user
from django.contrib.auth.models import User

# Create your models here.

class Respuesta(models.Model):
	descripcion = models.TextField()

	def __str__(self):
		return '{}'.format(self.descripcion)
	
class Pregunta(models.Model):
	descripcion = models.TextField()
	respuestas = models.ManyToManyField(Respuesta)
	correcta = models.IntegerField()

	#def __str__(self):
	#	return '{}'.format(self.descripcion)

	def __str__(self):
		return '{} {} {}'.format(self.descripcion,self.descripcion.join(respuesta.descripcion for respuesta in self.respuestas.all()),self.correcta)

class Jugadores(models.Model):
	nombre = models.CharField(max_length=50)
	pais = models.CharField(max_length=50)
	dorsal = models.IntegerField()
	puntaje = models.IntegerField()

	def __str__(self):
		return '{}'.format(self.nombre)

class Equipo(models.Model):
	tactica = models.IntegerField()
	jugadores = models.ManyToManyField(Jugadores)
	usuario = models.ForeignKey(User,null=True,blank=True,on_delete=models.CASCADE)
	

class DatosUsuario(models.Model):
	user = models.OneToOneField(User, default=1, on_delete=models.CASCADE)
	dinero =  models.FloatField()
	def __str__(self):
		return "%s" % (self.user)

class Apuesta(models.Model):
	estado = models.BooleanField(default=True)	
	partido =  models.CharField(max_length=10)	
	apuesta =  models.FloatField()
	importe =  models.FloatField()
	resultado = models.CharField(max_length=1)
	user = models.ForeignKey(User, default=1, on_delete=models.CASCADE)
	def __str__(self):
		return "%s aposto %s al %s en el partido %s" % (self.user, self.apuesta, self.resultado, self.partido)



