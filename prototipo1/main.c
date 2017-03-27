#include <stdio.h>
#include <stdlib.h>

void sumar(void);
int main()
{
    sumar();
    return 0;
}
void sumar(void);
{
    int numeroUno;
    int numeroDos;
    int resultado;

    printf("Ingrese un numero: ");
    scanf("%d", &numeroUno);

    printf("Ingrese un numero: ");
    scanf("%d", &numeroDos);

    resultado = numeroUno + numeroDos;
    printf("El resultado es: %d", resultado);
}
