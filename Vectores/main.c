#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numeros [5];

    for (int i=0; i<5; i++)
    {
        printf("Ingrese un numero: ");
        scanf("%d", &numeros[i] );
    }

    printf("\n\n Los valores ingresados son: ");

    for (int i = 0; i<5; i++)
    {
        printf("%d ", numeros[i]);
    }

    printf("\n\n");

    printf("\n\n Los valores ingresados del ultimo al primero son: ");

    for (int i=4; i>=0; i--)
    {
        printf("%d ", numeros[i]);
    }




}
