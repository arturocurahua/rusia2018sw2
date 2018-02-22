from django.contrib import admin

from app.juegosmundial.models import Respuesta, Pregunta, Jugadores, Equipo, Apuesta, DatosUsuario
# Register your models here.

admin.site.register(Respuesta)
admin.site.register(Pregunta)
admin.site.register(Jugadores)
admin.site.register(Equipo)
admin.site.register(Apuesta)
admin.site.register(DatosUsuario)