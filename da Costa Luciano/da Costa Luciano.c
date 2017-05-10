#include "funciones.h"
#include <strings.h>


void inicializarEstado(eProgramador programador[], int tamProg)
{
    int i;
    for (i=0; i<tamProg; i++)
    {
        programador[i].estado=-1;
    }
}

void definirCategorias(eCategoria categoria[], int tamCat)
{
    int i;
    categoria[0].idCategoria=1;
    categoria[1].idCategoria=2;
    categoria[2].idCategoria=3;
    for (i=0; i<tamCat; i++)
    {
        if(categoria[i].idCategoria==1)
        {
            strcpy(categoria[i].descripcion, "Junior");
            categoria[i].pagoXhora=100;
        }
        if (categoria[i].idCategoria==2)
        {
            strcpy(categoria[i].descripcion, "SemiSenior");
            categoria[i].pagoXhora=1000;
        }
        if (categoria[i].idCategoria==3)
        {
            strcpy(categoria[i].descripcion, "Junior");
            categoria[i].pagoXhora=10000;
        }
    }

}


void altaDeProgramador(eProgramador programador[], int tamProg, eCategoria categoria[], int tamCat)
{
    int i, k;
    int auxID;
    int repetido=0;
    int disponible=-1;

    for (i=0; i<tamProg; i++)
    {
        if(programador[i].estado==-1)
        {
            programador[i].estado=i;
            disponible=i;
            break;
        }
    }
    if (disponible!=tamProg && disponible!=-1)
    {
        printf("Ingrese su ID: ");
        fflush(stdin);
        scanf("%d", &auxIprogramador[disponible].idProgramador=auxID;
            printf("Ingrese su nombre: ");
            fflush(stdin);
            gets(programador[disponible].nombreD);
        for (k=0; k<tamProg; k++)
        {
            if (auxID==programador[k].idProgramador)
            {
                repetido=1;
                printf("El ID ya esta registrado");
                break;
            }

        }

        if(repetido==0)
        {
            programador[disponible].idProgramador=auxID;
            printf("Ingrese su nombre: ");
            fflush(stdin);
            gets(programador[disponible].nombre);
            printf("Ingrese su apellido: ");
            fflush(stdin);
            gets(programador[disponible].apellido);
            printf("Ingrese su categoria 1. Junior 2. SemiSenior 3. Senior");
            fflush(stdin);
            scanf("%d", programador[disponible].idCategoria);
        }


    }
}

void modificarUsuario(eProgramador programador[], int tamProg)
{
    eAuxProgramador auxprogramador [20];
    int i;
    int k;
    int opcion;
    char seguir = 's';
    int posicion;

    while (seguir=='s')
    {
        printf("Elegi la opcion a modificar: 1-Nombre  2-Apellido 3- idProgramador 4- Salir");
        fflush(stdin);
        scanf("%d", &opcion);
        switch(opcion)
        {
        case 1:
            printf("Ingrese el id Programador");
            fflush(stdin);
            scanf("%d", &auxProgramador[0].idProgramador);
            for (k=0; k<tamProg; k++)
            {
                if (auxprogramador[0].idProgramador==programador[k].idProgramador)
                {
                    printf("Ingrese el nombre: ");
                    fflush(stdin);
                    gets(auxprogramador[0].nombre);
                    if (stricmp(programador [k].nombre, auxprogramador[0].nombre)==0)
                    {
                        printf("Ingrese nuevo nombre: ");
                        fflush(stdin)
                        gets(auxprogramador[0].nombre);
                        strcpy(programador[k].nombre,auxprogramador[0].nombre);
                        printf("Su nuevo nombre es %s \n", programador[k].nombre);
                    }
                }
            }




    break;
        case 2:
            printf("Ingrese el idProgramador: ");
            fflush(stdin);
            scanf("%d", &auxprogramador[0].idProgramador);
            for (k=0; k<tamProg; k++)
            {
                if(auxprogramador[0].idProgramador==programador[k].idProgramador)
                {
                    printf("Ingrese el apellido: ");
                    fflush(stdin);
                    gets(auxprogramador[0].apellido);
                    if (stricmp(programador[k].apellido,auxprogramador[0].apellido)==0)
                    {
                        printf("Ingrese nuevo apellido: ");
                        fflush(stdin);
                        gets(auxprogramador[0].apellido);
                        strcpy(programador[k].apellido, auxprogramador[0].apellido);
                        printf("Su nuevo apellido es %s ", programador[k].apellido);


                    }
                }
            }
    break;
        case 3:
            printf("Ingrese el id Programador: ");
            fflush(stdin);
            scanf("%d", &auxprogramador[0].idProgramador);
            for (k=0; k<tamProg; k++)
            {
                if (auxprogramador[0].idProgramador == programador [k].idProgramador)
                {
                    printf("Ingrese su categoria: 1- Junior 2-Semisenior 3-Senior");
                    fflush(stdin);
                    scanf("%d", &auxprogramador[0].idCategoria);
                    printf("%d\n%d\n", &auxprogramador[0].idCategoria, programador[k].idCategoria);
                    if (auxprogramador[0].idCategoria==programador[k].idCategoria)
                    {
                        printf("Ingrese nueva idCategoria: \n");
                        fflush(stdin);
                        scanf("%d", &auxprogramador[0].idCategoria);
                        programador[k].idCategoria=auxprogramador[0].idCategoria;
                        printf("Su nueva idCategoria es %d\n", programador[k].idCategoria);

                    }
                }
            }
          break;
        case 4:
            seguir 'n';
            break;
      }

    }
}

void bajadeProgramador(eProgramador programador[], int tamProg)
{
    char respuesta;
    int auxPROG;
    int i;
    int k;

    printf("Ingrese el id Programador \n: ");
    fflush(stdin);
    scanf("%d", &auxPROG);
    for (k=0; k<tamProg; k++)
    {
        if (auxPROG == programador [k].idProgramador)
        {
            printf("Quiere dar de BAJA su usuario? S o N\n");
            fflush(stdin);
            scanf("%c", &respuesta);
            if (respuesta!='n')
            {
               programador[k].estado=-1;
               printf("Su usuario esta inhabilitado \n");

            }
        }
    }
}


