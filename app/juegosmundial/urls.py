from django.urls import path
from django.conf.urls import url

from app.juegosmundial.views import index_juegosmundial,equipoidealjuegos,juegosmundialbien,triviadescrip,\
                            equipoidealdescrip,polladescrip,triviajuegos,preguntas_list,listado,triviafinal,listadojugadores,equipo_view,equiposguardados,apuesta,grupoB,grupoA,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH

app_name = 'juegosmundial'

urlpatterns = [
    path('index/', index_juegosmundial),
    url(r'^juegosbien/', juegosmundialbien, name='juegos_listar'),
    url(r'^triviainfos/', triviadescrip, name='triviainfo'),
    url(r'^equipoideal/', equipoidealdescrip, name='equipoidealinfo'),
    url(r'^polla/',polladescrip , name='pollainfo'),
    url(r'^triviajuego/',triviajuegos, name='triviajuego'),
    #url(r'^triviajuego/',preguntas_list, name='triviajuego'),
    url(r'^triviafinal/',triviafinal, name='triviajuegofinal'),
    url(r'^listado/',listado, name='listado'),

    
    #agregando equipo idal 
    url(r'^equipoidealjugadores/',listadojugadores, name='listadojugadores'),
    url(r'^equipoidealjuego/',equipo_view, name='equipoidealjuego'),
    url(r'^equiposguardados/',equiposguardados, name='equiposguardados'),
    #agregando apuesta
    url(r'^apuesta/',apuesta, name='apuesta'),

    url(r'^grupoa/',grupoA, name='grupoA'),
    url(r'^grupob/',grupoB, name='grupoB'),
    url(r'^grupoc/',grupoC, name='grupoC'),
    url(r'^grupod/',grupoD, name='grupoD'),
    url(r'^grupoe/',grupoE, name='grupoE'),
    url(r'^grupof/',grupoF, name='grupoF'),
    url(r'^grupog/',grupoG, name='grupoG'),
    url(r'^grupoh/',grupoH, name='grupoH'),


    
]
