from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core import serializers
from django.http import JsonResponse
from django.contrib.auth.models import User
from app.juegosmundial.models import Pregunta,Respuesta,Jugadores,Equipo,Apuesta,DatosUsuario
from django.db.models import F

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


#Listar partidos para definir ganadores
def listarpartidos(request):
	return render(request, 'juegos/polla/listarpartidos.html')

@csrf_exempt
def saveapuesta(request):
	jsonrespuesta={}
	partido = request.POST.get('partido')
	apuesta = request.POST.get('apuesta')
	importe = request.POST.get('importe')
	resultado = request.POST.get('resultado')
	user = User.objects.get(username=request.POST.get('usuario'))
	ap = Apuesta(partido=partido, apuesta=apuesta, importe=importe, resultado=resultado,user=user)
	ap.save()
	DatosUsuario.objects.filter(user=user).update(dinero=F('dinero')-apuesta)
	return JsonResponse(jsonrespuesta)

@csrf_exempt
def finddinero(request):
	user = User.objects.get(username=request.POST.get('usuario'))
	datos_usuario = DatosUsuario.objects.filter(user=user)
	if(datos_usuario):
		jsonrespuesta={"msg" : "ya registrado" , "dinero":datos_usuario[0].dinero}
		pass
	else:
		print("Usuario no registrado")
		d = DatosUsuario(user=user, dinero=100)
		d.save()
		jsonrespuesta={"msg" : "nuevo" , "dinero":100}
	return JsonResponse(jsonrespuesta)

@csrf_exempt
def solvepartido(request):
	jsonrespuesta={}
	user = User.objects.get(username=request.POST.get('usuario'))
	apuestas = Apuesta.objects.filter(partido=request.POST.get('partido'), resultado=request.POST.get('ganador'), estado=True)
	for apue in apuestas:
		u = User.objects.get(username=apue.user.username)
		DatosUsuario.objects.filter(user=u).update(dinero=F('dinero')+apue.importe)
	apuestas_pasaron = Apuesta.objects.filter(partido=request.POST.get('partido')).update(estado=False)	
	return JsonResponse(jsonrespuesta)
