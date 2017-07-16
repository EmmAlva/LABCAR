
LABCAR
<h2> Proyecto Final Spring 4 </h2>
<p> Labcar es una empresade taxis que te permite edir un taxi cuando quieras y en donde quieras</p>

<h1>Realización de la página</h1>
<h5>La web de Labcar esta formada por:</h5>

#navbar
#hero
#información
#conduce
#footer

en el navbar encontraremos el logo y la opción de: viaja -conduce e inicia sesión,mientras que enla vista mobile solo se muestra ell logo y las demás opciones pasan aserparte deun menú desplegable.

El menu es responsive

El hero presenta en la parte derecha la opción de registrarse o convertirse en conductor
El hero mobil presenta un texto que indica descargar la aplicación 

Información

En la parte informativa encontramos datos interesantes de la aplicación. En la vista mobile los datos cambian, el texto se esconde solo aparece un escrito en la parte inferior al contenedor del celular


Conductor
En la parte de conductor encontramos la imagen "conduce" con un contenido a la derecha
En la vista mobile cambia, la parte del contenido quesolo estaba a la derecha pasa a ocupar todo el ancho

Tarifa
La secciòn de tarifa cuenta con un texto,dos inputs, un botón y un maa.
Po medio de la API geolocation (https://developers.google.com/maps/?hl=es-419)  nos mostrará en dónde nos encontramos.

Footer
En la vista mobile desaparece un bloque de link, los íconos aparecen a la derecha, las tiendas debajo de los íconos y el no,bre final..

FUNCIONALIDAD
Al ingresar a la página se solicita la ubicación de usuario y se marcará en el mapa con ayuda de google maps.
Adicional a ello, que se trace una ruta entre los puntos escritos en los input y que estime la tarifa en base a la distancia entre los puntos.
En la vista mobile solo estimará la rarifa entre los puntos que se escriban en los inputs.

*Se incluye que los inputs tienen autocompletado, hay un marker destino y origen, además de marcar la ruta en el mapa. 
Mira elproyecto completo : https://emmalva.github.io/LABCAR/
