#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
    char nombre[21];
    char apellido[21];
    char apellidoNombre[50];

    printf("Ingrese nombre: " );
    fflush(stdin);
    gets(nombre);

    printf("Ingrese apellido: " );
    fflush(stdin);
    gets(apellido);


    strcpy(apellidoNombre, apellido);
    strcat(apellidoNombre, " , ");
    strcat(apellidoNombre, nombre);

    apellidoNombre [0] = toupper(apellidoNombre[0]);



    puts((apellidoNombre));

    return 0;
}
