from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core import serializers

from app.juegosmundial.models import Pregunta,Respuesta,Jugadores,Equipo

from app.juegosmundial.forms import EquipoForm
# Create your views here.
from django.views.decorators.csrf import csrf_exempt

import json


def index_juegosmundial(request):
	return HttpResponse("<h1>Soy la pagina principal</h1>")

def juegosmundialbien(request):
	return render(request, 'usuario/bienvenido.html')

def triviadescrip(request):
	return render(request, 'juegos/trivia/DescripTrivia.html')	

def equipoidealdescrip(request):
	return render(request, 'juegos/equipo/DescripEquipoIdeal.html')	

def polladescrip(request):
	return render(request, 'juegos/polla/DescripPolla.html')


def triviajuegos(request):
	return render(request, 'juegos/trivia/TriviaJuego.html')

def triviafinal(request):
	return render(request, 'juegos/trivia/FinJuegoTrivia.html')

def preguntas_list(request):
	pregunta = Pregunta.objects.all()
	respuesta = Respuesta.objects.all()
	#contexto = {'preguntas':pregunta, 'respuestas':respuesta}
	contexto = {'respuestas':respuesta}
	return render(request, 'juegos/TriviaJuego.html', contexto)

def listado(request):
	pregunta = Pregunta.objects.all()
	respuesta = Respuesta.objects.all()

	contexto = {'preguntas':pregunta,'respuestas':respuesta}
	print(contexto)
	lista = serializers.serialize('json', pregunta)
	lista2 = serializers.serialize('json', respuesta)
	
	#return HttpResponse('{'+lista+','+lista2+'}', content_type='application/json')
	return HttpResponse('['+lista+','+lista2+']', content_type='application/json')

	#Agregando listadoJugadores

def listadojugadores(request):
	jugadores = Jugadores.objects.all()
	

	#contexto = {'jugadores':jugadores}
	#print(contexto)
	listajugadores = serializers.serialize('json', jugadores)
	
	
	#return HttpResponse('{'+lista+','+lista2+'}', content_type='application/json')
	return HttpResponse(listajugadores, content_type='application/json')	

def equipoidealjuegos(request):
	return render(request, 'juegos/EquipoIdealJuego.html')

def equipo_view(request):
	if request.method == 'POST':
		form = EquipoForm(request.POST)
		if form.is_valid():
			form.save()
		return redirect('juegosmundial:juegos_listar')
	else:
		form = EquipoForm()
	return render(request,'juegos/equipo/EquipoIdealJuego.html',{'form':form})


def equiposguardados(request):
	equipos = Equipo.objects.all()
	
	listaequipo = serializers.serialize('json', equipos)
	
	return HttpResponse(listaequipo, content_type='application/json')	

def apuesta(request):
	return render(request, 'juegos/polla/polla.html')

def grupoA(request):
	return render(request, 'juegos/polla/grupoa.html')
def grupoB(request):
	return render(request, 'juegos/polla/grupob.html')
def grupoC(request):
	return render(request, 'juegos/polla/grupoc.html')
def grupoD(request):
	return render(request, 'juegos/polla/grupod.html')
def grupoE(request):
	return render(request, 'juegos/polla/grupoe.html')
def grupoF(request):
	return render(request, 'juegos/polla/grupof.html')
def grupoG(request):
	return render(request, 'juegos/polla/grupog.html')
def grupoH(request):
	return render(request, 'juegos/polla/grupoh.html')