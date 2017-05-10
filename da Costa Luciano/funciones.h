#ifndef FUNCIONES_H_INCLUDED
#define FUNCIONES_H_INCLUDED

typedef struct
{
    int idProgramador;
    char nombre[30];
    char apellido[30];
    int idCategoria;
    int estado;
}eProgramador;

typedef struct
{
    int idCategoria;
    char descripcion[50];
    int pagoXhora;

}eCategoria;

typedef struct
{
    int idProyecto;
    char nombre[50];

}eProyecto;

typedef struct
{
    int idProgramador;
    char nombre[30];
    char apellido[30];
    int iDCategoria;
    int estado;

}eAuxProgramador;

typedef struct
{
    int idProyecto;
    int idProgramador;
    int horasATrabajar;

}eProyectoProgramador;

void inicializarEstado(eProgramador[], int);
void definirCategorias(eCategoria[], int);
void altaDeProgramador(eProgramador[], int);
void bajadeProgramador(eProgramador[], int);
void modificarUsuario(eProgramador[], int);






#endif // FUNCIONES_H_INCLUDED
