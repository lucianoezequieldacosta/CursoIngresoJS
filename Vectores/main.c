#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>


// Se usa el \o para finalizar el mensaje (10 caracteres S E B A S T I A N A \o el o te desborda la funcion, tenes que cargar mas. Char nombre [10];)
// Se calcula poner 20: Char nombre [20] 19 caracteres mas el \o
// scanf("%c", &sexo[2]) (se usa c para caracter y dos para las opciones M o F)
// Guardas la cadena que entra en el array: scanf("%s", nombre);
// lo mostras por printf("%s", nombre);



int main()
{
    char nombre [20];
    char i;
    printf("\Ingrese su nombre: ");
    //scanf ("%s", nombre);

    gets(nombre);
    strlwr(nombre);
    nombre [0] = toupper (nombre[0]);

    for (i=0; i<20; i++)

       if (nombre[i] == ' ')
       {
          nombre [i+1] = toupper (nombre[i+1]);
       }

    printf("\n Usted se llama %s\n", nombre);

    return 0;

}
