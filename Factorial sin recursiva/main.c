#include <stdio.h>
#include <stdlib.h>

int main ()
int factorial (int n)
{
    int resultado;

    if (n == 0) // si es 0 se ejecuta un return
    {
        return 1;
    }
    else
    {
        resultado= n * factorial (n-1);  // funciones se cargan en la memoria y se recopilan
        return resultado;
    }

}

