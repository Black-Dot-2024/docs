# Link Bridge Plan de Pruebas 

**Cliente - Zeitgeist**

Versión 1.0

**Autor(es)** 
* Ian Joab Padrón Corona
* José Armando Rosas Balderas
* Ramona Nájera Fuentes

Fecha: 04/03/2024

## Contenido
1. Introducción

    1.1 Propósito

    1.2 Alcance

        &nbsp; 1.2.1 Consideraciones

        &nbsp; 1.2.2 Asumpciones

        &nbsp; 1.2.3 Riesgos a considerar para el desarrollo de las pruebas

    1.3 Dependencias

2. Requerimientos para Pruebas

3. Milestones

4. Estrategia de Pruebas

    4.1 Tipos de Pruebas

        &nbsp; 4.1.1 Pruebas Unitarias

            * Descripción

            * Backend
                - Entrada
                - Salida

            * Frontend
                - Entrada
                - Salida

        &nbsp; 4.1.2 Pruebas Integración

            * Descripción

            * Backend
                - Entrada
                - Salida

            * Frontend
                - Entrada
                - Salida

        &nbsp; 4.1.3 Pruebas de Sistema

            * Descripción

            * Entrada

            * Salida

    4.2 Herramientas

## 1. Introducción

### 1.1 Propósito 
El presente plan de pruebas pretende establecer las bases sobre el proceso de pruebas para el proyecto Link Bridge. Las fases que engloba son las siguientes:
* Estrategia de pruebas
  - Planificación
  - Definición de recursos
  - Definición de componentes a probar
* Ejecución de pruebas
  - Seguimiento del procedimiento establecido
  - Manejo de resultados
* Manejo de pruebas
  - Restricciones del entorno de prueba

### 1.2 Alcance
| Etapa de prueba| Caso de uso | Back / Front | Tipo de Prueba | ¿Qué se evalúa? |
| :------------: | :---------: | :----------: | :------------: | :-------------: |
| Unitaria | Desarrollo de un requisito | Back | Automatizada (Mocha & Chai) | Estructura, tipos de dato |
||                                      | Front | Manual | Funcionalidad, diseño |
|Integración | Requisitos con restricciones previas | Back | Manual | Reglas de negocio |
|| Cuando todos los elementos de una vista estén completos | Front | Manual | Usabilidad y reglas de negocio |
| Sistema | Dos días antes de entregar una versión | Back y Front | Pruebas en voz alta | Funcionalidad del sistema completo |

**Consideraciones**

* Ninguna prueba de backend evalúa diseño o usabilidad.
* NInguna prueba de frontend evalúa estructura, tipo de dato o la coherencia de los datos

**Asunciones**

* El desarrollador no puede realizar pruebas del requerimiento que desarrolló.
* Tenemos un plan de trabajo a seguir antes de la ejecución de las pruebas.
* La documentación de las pruebas sigue los estándares establecidos en el documento

**Riesgos a considerar para el desarrollo de las pruebas**

* **Arquitectura:** Cambio en la infraestructura del cliente
* **Schedule:** Subestimación de tiempos y costos
* **Ciclo de vida:** Deuda técnica
* **Requerimientos:** Requisitos malentendidos por el equipo de desarrollo
* **Dependencia:** Uso de versión inestable del framework

### 1.3 Dependencias 
Pruebas Unitarias: Haber terminado al 100% el desarrollo de un requerimiento de sistema.
Prueba de Integración: Haber terminado el desarrollo y pruebas unitarias de una historia de usuario.
Prueba de Sistema: Completar las tareas asociadas a la versión trabajada (MVP o MBI).

## 2. Requerimientos para Pruebas 
La lista que se presenta a continuación identifica los elementos (casos de uso,  requerimientos funcionales y no funcionales) que han sido identificados como objetivo de prueba. Esta lista representa lo que será probado.  
[Presentar una lista de alto nivel de los requerimientos de estas pruebas]

## 3. Milestones
| Etapa                             | Descripción                  | Fecha      |
| --------------------------------- | ---------------------------- | ---------- |
| Creación del Plan de Pruebas      | Primer día del proyecto      | 07/03/2024 |
| Validación del plan con el equipo | Validación de este documento | 08/03/2024 |
| Prueba de sistema 1               | MVP                          | 08/05/2024 |
| Prueba de sistema 2               | MBI 1                        | 22/05/2024 |
| Prueba de sistema 3               | MBI 2                        | 05/06/2024 |



## 4. Estrategia de Pruebas  
| Objetivo de una prueba | Asegurar el correcto funcionamiento de cada uno de los elementos analizados.|
| --------------------------- | :--------------------------------------------------------------------- |
| **Técnica** | Ejecutar cada caso de prueba, utilizando datos válidos e  inválidos, para verificar los siguientes puntos: <br /> &nbsp; 1.  Al utilizar datos válidos, se obtienen los resultados esperados <br /> &nbsp; 2.  Al utilizar datos inválidos, existen notificaciones o mensajes de error que den retroalimentación al usuario <br /> &nbsp; 3.  Las reglas de negocio son aplicadas apropiadamente en el producto o componente analizado |
| **Criterios de  terminación** | Todas las pruebas planeadas han sido ejecutadas. <br /> Todos los defectos identificados han sido tratados.|
| **Consideraciones especiales**  | Ninguna |

### 4.1 Tipos de Pruebas

#### 4.1.1. Pruebas Unitarias

##### Descripción
Una prueba unitaria comprueba el funcionamiento correcto de un requisito de sistema. El tester que realizará las pruebas, deberá llenar el checklist de pruebas unitarias verificando que el código cumpla con el  criterio. El tester debe asegurar que todas las pruebas pasaron exitosamente. De lo contrario, deberá avisar al desarrollador para corregir los errores.

##### Backend
Para realizar pruebas unitarias en el backend del proyecto, se utilizará la librería Moka & Chai para realizar pruebas automatizadas. Documentar el resultado de las pruebas.

###### Entrada 
Casos prueba definidos en el código del proyecto utilizando la librería Moka & Chai.

###### Salida
Resultado de las pruebas documentado.

##### Frontend
Para realizar una prueba unitaria en el frontend del proyecto, es necesario elaborar una matriz de pruebas con escenarios donde el tester considere que podría llegar a fallar.

###### Entrada 
![Entrada-frontend](https://github.com/Black-Dot-2024/docs/blob/main/static/img/Entrada_Plan_de_pruebas_ZG.png)

###### Salida
![Salida-frontend](https://github.com/Black-Dot-2024/docs/blob/main/static/img/Salida_front_unitaria_front_integracion_ZG.png)

#### 4.1.2. Pruebas Integración

##### Descripción
Una prueba de integración ayuda a verificar que todos los componentes integrados funcionen correctamente, Son ejecutadas cuando todos los componentes de una historia de usuario o vista estén desarrollados. El tester deberá seguir todos los casos de prueba y asegurar que todas las pruebas pasaron exitosamente. De lo contrario, deberá avisar a los desarrolladores para corregir los errores. Esta fase termina cuando todos los casos de prueba integrales fueron ejecutados y todos los  defectos fueron cerrados.

##### Backend
Las pruebas de integración del backend se realizan por cada requisito de sistema. El tester debe realizar escenarios prueba en donde verifique que solo usuarios autenticados y con privilegios específicos puedan acceder a sus funcionalidades correspondientes.

###### Entrada 
![Entrada-backend](https://github.com/Black-Dot-2024/docs/blob/main/static/img/Entrada_Plan_de_pruebas_ZG.png)

###### Salida
![Salida-backend](https://github.com/Black-Dot-2024/docs/blob/main/static/img/Salida_back_integracion_ZG.png)

##### Frontend
Las pruebas de integración de frontend se hacen por cada vista del sistema. El tester debe realizar escenarios para que los usuarios que tengan roles específicos puedan acceder a ciertas funcionalidades y en caso de que no, sean redirigidos correctamente.

###### Entrada 
![Entrada-frontend](https://github.com/Black-Dot-2024/docs/blob/main/static/img/Entrada_Plan_de_pruebas_ZG.png)

###### Salida
![Salida-frontend](https://github.com/Black-Dot-2024/docs/blob/main/static/img/Salida_front_unitaria_front_integracion_ZG.png)

#### 4.1.3 Pruebas de Sistema 

##### Descripción
Una prueba de sistema valida que la integración de múltiples módulos y componentes individuales del sistema funcione correctamente de manera conjunta. El tester define las pruebas desde la perspectiva del usuario, interactuando con la aplicación mediante la GUI y analizando la salida de dichas interacciones. Esta prueba busca verificar que se cumplan con los requerimientos y las reglas de negocios establecidas. Se harán pruebas en voz alta con el usuario final.

###### Entrada 
Documento con actividades para el usuario final .

###### Salida
Documento con la retroalimentación del usuario.

### 4.2 Herramientas 
Las siguientes herramientas serán utilizadas para este proyecto:

| **Tipo de prueba**   | **Herramienta**                    |
| :------------------: | :--------------------------------: |
| Unitarias Backend    | Moka & Chai                        |
| Unitarias Frontend   | Matriz de Pruebas                  |
| Integración Backend  | Postman y Matriz de Pruebas        |
| Integración FrontEnd | Matriz de Pruebas                  |
| Sistema              | Documento para pruebas en voz alta |

