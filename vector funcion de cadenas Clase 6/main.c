#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main()
{
    char nombre [20];
    char auxcad [100];

    printf("Ingrese un nombre: ");
    gets(auxcad);

    while (strlen(auxcad) > 19) {
        printf("\nError. Nombre demasiado largo. Reingrese: ");
        gets(auxcad);
    }
    strcpy (nombre, auxcad);

    printf("\nSu nombre es %s", nombre);

    return 0;

}
