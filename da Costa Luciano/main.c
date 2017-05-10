#include <stdio.h>
#include <stdlib.h>
#include "funciones.h"
#include "funciones.c"

int main ()
{
   int i;
   int opcion;
   char seguir='s';
   eProgramador programador[50];
   eProyecto proyecto[100];
   eProyectoProgramador[1000];
   eCategoria categoria[3];

   inicializarEstado(programador, 50);
   definirCategorias(categoria, 3);

   while (seguir!='n')
   {
       printf(" 1----- Alta de programador                   ----- ");
       printf(" 2----- Modificacion de datos de programador: ----- ");
       printf(" 3----- Baja de programador                   ----- ");
       printf(" 4----- Asignar el programador al proyecto    ----- ");
       printf(" 5----- Lista de los programadores:           ----- ");
       printf(" 6----- Lista de los proyectos:               ----- ");
       printf(" 7----- Lista de proyectos de programador:    ----- ");
       printf(" 8----- Proyectos demandantes                 ----- ");
       printf(" 9----- Salir                                 ----- ");

       fflush(stdin);
       scanf("%d", &opcion);

       switch(opcion)
       {
          case 1:
           altaDeProgramador(programador, 50, categoria, 3);
           break;
          case 2:
           modificarUsuario(programador, 50);
           break;
          case 3:
           bajadeProgramador(programador, 50);
           break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            break;
          case 7:
            break;
          case 8:
            break;
          case 9:
            seguir='n';
            break;
       }

   }

 return 0;

}
