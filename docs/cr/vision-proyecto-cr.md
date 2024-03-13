# Visión del Proyecto Talent 360

## Necesidad

Automatizar la aplicación de los diagnósticos organizacionales y la generación de reportes, a fin de profesionalizar nuestros servicios y ofrecerle una mejor experiencia al cliente

## Misión

Atender la ineficiencia en el proceso de diagnóstico de los colaboradores, junto con la falta de personalización en los formularios de captura de datos y en los planes de desarrollo.

## Objetivos

- Reducir en un 30% el tiempo invertido en la generación de reportes por parte del equipo dedicado a la consultoría y desarrollo organizacional de CR

## Entregables

- Código fuente
- Manual de usuario
- Perfil de desarrollador
- Plan de proyecto

## Ciclo de vida del proyecto

El proyecto seguirá el ciclo de vida básico de Disciplined Agile Delivery (DAD):

![disciplined-agile-lifecycle-basic1](https://github.com/Black-Dot-2024/docs/assets/110949367/00c12899-9f03-49c6-a810-6cec532f11f1)

Este ciclo de vida consiste en tres fases:

### Inicio

Los objetivos de la fase de inicio son:

- Formar el equipo inicial
- Desarrollar una visión común
- Alinear el proyecto con la dirección de la empresa
- Explorar el alcance inicial
- Identificar la estrategia técnica inicial
- Desarrollar el plan inicial de liberaciones
- Asegurar el financiamiento
- Formar el ambiente de trabajo
- Identificar riesgos
- Desarrollar la estrategia inicial de pruebas

### Construcción

Los objetivos de la fase de construcción son:

- Probar la arquitectura temprano
- Producir una solución potencialmente consumible
- Encargarse de las necesidades cambiantes del stakeholder
- Mantener o mejorar los niveles existentes de calidad
- Acercarse a la visión desplegable

### Transición

- Los objetivos de la fase de transición son:
- Asegurarse que la solución está lista para producción
- Desplegar la solución hacia producción

## Stakeholders

| Categoría           | Encargado                                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Customer or Client  | CR Organizacional                                                                                                                                                                     |
| Project Core Team   | Black Dot                                                                                                                                                                             |
| Program Manager     | Olimpia Garcia y Daniel Fuentes                                                                                                                                                       |
| Product Owner       | Miguel Angel Tena                                                                                                                                                                     |
| Team Lead           | Carlos Velasco                                                                                                                                                                        |
| Architecture Owner  | Daniel Cajas                                                                                                                                                                          |
| Project Team Member | Juan Pablo Cabrera, David Langarica, Alejandra Cabrera, Uri Gopar, Maria Fernanda Moreno, Ricardo Rosales, José Riosmena, José Diego Llaca, Damariz Licea, Diego Vega, Diego Sandoval |

## Project Milestones

|                                                               | Fecha Esperada |
| ------------------------------------------------------------- | -------------- |
| ¿El stakeholder está de acuerdo con tu estrategia?            | 08/03/2024 - 11/03/2024 |
| ¿Realmente puedes construir la solución propuesta?            | 08/04/2024 - 12/04/2024 |
| ¿El proyecto sigue teniendo sentido?                          | 22/04/2024 - 26/04/2024 |
| ¿Tiene sentido liberar la solución actual?                    | 29/04/2024 - 03/05/2024 |
| ¿La solución va a funcionar en producción?                    | 05/05/2024 - 10/05/2024 |
| ¿Están contentos los stakeholders con la solución desplegada? | 03/06/2024 - 15/06/2024 |

## Iteraciones del proyecto

```mermaid
gantt
    dateFormat YYYY-MM-DD
    section Inception
        Initiate team   :2024-02-12, 2d
        Junta con Socio :2024-02-13, 1d
        Formación de equipo :2024-02-16, 1d
        Asignación de CR :2024-02-14, 1d
        Definición de requerimientos :2024-02-29, 8d
        Definición de arquitectura :2024-02-26, 5d
        Definición de visión :2024-02-19, 12d
        Alineación con estrategia de CR :2024-02-14, 1d
        Desarrollo de visión compartida :2024-02-14, 1d
        Milestone review :2024-03-5, 3d
        Comunicar visión con CR   :1d
        Entrenamiento con Odoo :2024-03-18, 12d
    section Construction
        MVP :2024-04-03, 41d
        1° Iteración :2024-04-3, 13d
        2° Iteración :2024-04-17, 13d
        3° Iteración :2024-05-01, 13d
        MBI 1 :2024-05-15, 13d
        MBI 2 :2024-05-29, 13d
    section Transition
        MVP Transition :2024-05-07, 7d
        MBI 1 Transition :2024-05-24, 3d
        MBI 2 Transition :2024-06-07, 3d

```

## Arquitectura
### Propuesta elegida: 
Utilizar la arquitectura de Odoo (framework de Python) debido a que los socios
formadores la utilizan en sus operaciones de empresa y nosotros, a pesar de no conocer la tecnología,
creemos que lo mejor es adaptarnos a su forma de trabajo, ya que una ventaja muy importante es que
podemos utilizar las funcionalidades ya existentes para desarrollar nuestro módulo de evaluaciones.

### Otras propuestas: 
Utilizar la arquitectura de React (biblioteca de Javascript) junto a un sistema de base
de datos (como MariaDB). Esta propuesta se rechazó debido a que consideramos que a largo plazo iba a
resultar muy costoso (nos íbamos a tardar mucho tiempo en desarrollar toda la solución) porque sería
empezar el proyecto desde cero (a comparación de utilizar Odoo) y entrenar a los stakeholders con las
nuevas tecnologías que implementaríamos.

## Matriz de Stakeholders CR

![Matriz de Stakeholder CR](Matriz-Stakeholder-CR.png)