#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num1;
    int num2;
    int resultado;

    printf("Ingrese un numero: ");
    scanf("%d", &num1);
    printf("Ingrese un numero: ");
    scanf("%d" ,&num2);
    resultado = num1 + num2;
    printf("\la suma es %d\n", resultado);

    return 0;

}
