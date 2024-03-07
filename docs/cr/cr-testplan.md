# Plan de Pruebas 
v 1.0

Autores:
- Diego Vega
- Ricardo Rosales

## 1. Introducción
El siguiente plan de pruebas busca estandarizar el proceso de pruebas para el proyecto de Talent Dot. El plan se desevnuelve de la siguiente manera:

### 1.1 Propósito 

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
| Unitaria | Desarrollo de funcionalidad específica | Back | Automatizada | Validación de lógica de negocio, manejo de errores |
||                                      | Front | Manual | Usabilidad, Interfaz de Usuario |
|Integración | Requisitos con restricciones previas | Back | Manual | Validación de integración, interoperabilidad |
|| Cuando todos los elementos de una vista estén completos | Front | Manual | Usabilidad y reglas de negocio |
| Sistema | Funcionalidades principales del sistema	 | Back y Front | Pruebas en voz alta | Rendimiento, escalabilidad |

**Consideraciones**

* Ninguna prueba de backend evalúa diseño o usabilidad.
* NInguna prueba de frontend evalúa estructura, tipo de dato o la coherencia de los datos

**Asunciones**

* El desarrollador no puede realizar pruebas del requerimiento que desarrolló.
* La documentación de las pruebas sigue los estándares establecidos en el documento

**Riesgos a considerar para el desarrollo de las pruebas**

* **Arquitectura:** Cambio en la infraestructura del cliente
* **Schedule:** Subestimación de tiempos y costos
* **Ciclo de vida:** Deuda técnica
* **Requerimientos:** Requisitos malentendidos por el equipo de desarrollo

### 1.3 Dependencias 
* Pruebas Unitarias: Haber terminado al 100% el desarrollo de un requerimiento de sistema.
* Prueba de Integración: Haber terminado el desarrollo y pruebas unitarias de una historia de usuario.
* Prueba de Sistema: Completar las tareas asociadas a la versión trabajada (MVP o MBI).

## 2. Requerimientos para Pruebas 
La lista que se presenta a continuación identifica los elementos (requerimientos funcionales y no funcionales) que han sido identificados como objetivo de prueba. Esta lista representa lo que será probado.  

<details>
<summary>Requisitos Funcionales</summary>
```
1. Creación de Evaluaciones 360
2. Asignación de evaluaciones
3. Creación de competencia para evaluación 360
4. Visualización de progreso de evaluaciones
5. Creación de preguntas de comportamiento
6. Asignación de preguntas de comportamientos a competencias
7. Creación de competencias para áreas específicas
8. Selección de competencias del catálogo
9. Selección de escala de 5 niveles
10. Creación de evaluación de clima
11. Creación de evaluación de NOM 035
12. Creación de catálogo de preguntas de comportamiento por administrador
13. Asignación de preguntas de comportamiento a preguntas por administrador
14. Creación del catálogo de competencias
15. Consulta de mis evaluaciones asignadas
16. Contestar mis evaluaciones asignadas
17. Crear form builder
18. Consultar reportes de evaluación (Cliente)
19. Consultar reportes de evaluación (Admin)
20. Consultar reportes de evaluación (Colaborador)
21. Descargar reporte de evaluación (Admin)
22. Descargar reporte de evaluación (Colaborador)
23. Obtener los datos de una evaluación para generar reportes de evaluación
24. Crear método de notificaciones
25. Generar un plan de acción
26. Consultar mi plan de acción
27. Integrar IA
```
</details>

<details>
<summary>Requisitos No Funcionales</summary>
```
1. Usabilidad
2. Portabilidad
3. Seguridad
```
</details>


## 3. Milestones
| Etapa                             | Descripción                  | Fecha      |
| --------------------------------- | ---------------------------- | ---------- |
| Creación del Plan de Pruebas      | Primer día del proyecto      | 07/03/2024 |
| Validación del plan con el equipo | Validación de este documento | 08/03/2024 |
| Prueba de sistema 1               | MVP                          | 10/05/2024 |
| Prueba de sistema 2               | MBI 1                        | 24/05/2024 |
| Prueba de sistema 3               | MBI 2                        | 07/06/2024 |



## 4. Estrategia de Pruebas  
| Objetivo de una prueba | Asegurar el correcto funcionamiento de cada uno de los elementos analizados.|
| --------------------------- | :--------------------------------------------------------------------- |
| **Técnica** | Ejecutar cada caso de prueba, utilizando datos válidos e  inválidos, para verificar los siguientes puntos: <br /> &nbsp; 1.  Al utilizar datos válidos, se obtienen los resultados esperados <br /> &nbsp; 2.  Al utilizar datos inválidos, existen notificaciones o mensajes de error que den retroalimentación al usuario <br /> &nbsp; 3.  Las reglas de negocio son aplicadas apropiadamente en el producto o componente analizado |
| **Criterios de  terminación** | Todos los defectos identificados han sido tratados. <br /> Todas las pruebas planeadas fueron ejecutadas y cuentan con estatus de éxito|
| **Consideraciones especiales**  | Ninguna |

### 4.1 Tipos de Pruebas

#### 4.1.1. Pruebas Unitarias

##### Descripción
Una prueba unitaria comprueba el funcionamiento correcto de un requisito de sistema. El tester que realizará las pruebas, deberá llenar el checklist de pruebas unitarias verificando que el código cumpla con el  criterio. El tester debe ejecutar las pruebas y avisar al desarrollador en caso de que se necesite la correción de errores hasta que las pruebas pasen exitosamente.

##### Backend
Para realizar pruebas unitarias en el backend del proyecto, se utilizará (POR DEFINIR) para realizar pruebas automatizadas. Documentar el resultado de las pruebas.

###### Entrada 
| Test Id | Escenario                    | Parametros      | Resultado Esperado      | Resultado Obtenido      | Fecha Iteración "1 a N"| Estatus      |
| ------- | ---------------------------- | --------------- | ----------------------- | ----------------------- | ---------------------- | ----------- |
| RF1.1B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.2B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.3B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.4B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |

###### Salida
_Plantilla de pruebas unitarias de backend documentadas._

##### Frontend
Para realizar una prueba unitaria en el frontend del proyecto, es necesario elaborar una matriz de pruebas con escenarios donde el tester considere que podría llegar a fallar.

###### Entrada 
| Test Id | Escenario                    | Parametros      | Resultado Esperado      | Resultado Obtenido      | Fecha Iteración "1 a N"| Estatus      |
| ------- | ---------------------------- | --------------- | ----------------------- | ----------------------- | ---------------------- | ----------- |
| RF1.1F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.2F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.3F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.4F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |B

###### Salida
_Plantilla de pruebas unitarias de frontend documentadas._

#### 4.1.2. Pruebas Integración

##### Descripción
Una prueba de integración ayuda a verificar que todos los componentes integrados funcionen correctamente, Son ejecutadas cuando todos los componentes de una historia de usuario o vista estén desarrollados. El tester deberá seguir todos los casos de prueba y asegurar que todas las pruebas pasaron exitosamente. De lo contrario, deberá avisar a los desarrolladores para corregir los errores. Esta fase termina cuando todos los casos de prueba integrales fueron ejecutados y todos los  defectos fueron cerrados.

##### Backend
Las pruebas de integración del backend se realizan por cada requisito de sistema. El tester debe realizar escenarios prueba en donde verifique que solo usuarios autenticados y con privilegios específicos puedan acceder a sus funcionalidades correspondientes.

###### Entrada 
| Test Id | Escenario                    | Parametros      | Resultado Esperado      | Resultado Obtenido      | Fecha Iteración "1 a N"| Estatus      |
| ------- | ---------------------------- | --------------- | ----------------------- | ----------------------- | ---------------------- | ----------- |
| RF1.1B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.2B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.3B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.4B      | N/A                      | N/A             | N/A                     | N/A                     | N/A                    | N/A          |

###### Salida
_Plantilla de pruebas de integración de backend documentadas._

##### Frontend
Las pruebas de integración de frontend se hacen por cada vista del sistema. El tester debe realizar escenarios para que los usuarios que tengan roles específicos puedan acceder a ciertas funcionalidades y en caso de que no, sean redirigidos correctamente.

###### Entrada 
| Test Id | Escenario                    | Parametros      | Resultado Esperado      | Resultado Obtenido      | Fecha Iteración "1 a N"| Estatus      |
| ------- | ---------------------------- | --------------- | ----------------------- | ----------------------- | ---------------------- | ----------- |
| RF1.1F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.2F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.3F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |
| RF1.4F      | N/A                          | N/A             | N/A                     | N/A                     | N/A                    | N/A          |

###### Salida
_Plantilla de pruebas de integración de frontend documentadas._

#### 4.1.3 Pruebas de Sistema 

##### Descripción
Una prueba de sistema valida que la integración de múltiples módulos y componentes individuales del sistema funcione correctamente de manera conjunta. El tester define las pruebas desde la perspectiva del usuario, interactuando con la aplicación mediante la GUI y analizando la salida de dichas interacciones. Esta prueba busca verificar que se cumplan con los requerimientos y las reglas de negocios establecidas. Se harán pruebas en voz alta con el usuario final.

###### Entrada 
| Test Id.    | Escenario / Condición        | Resultado Obtenido      | Evidencia     |
| ----------- | ---------------------------- | ----------------------- | ------------- |
| RF1.1S      | N/A                          | N/A                     | N/A           |
| RF1.2S      | N/A                          | N/A                     | N/A           |
| RF1.3S      | N/A                          | N/A                     | N/A           |
| RF1.4S      | N/A                          | N/A                     | N/A           |

###### Salida
_Plantilla de pruebas de sistema documentadas._

### 4.2 Herramientas 
Las siguientes herramientas serán utilizadas para este proyecto:

| **Tipo de prueba**   | **Herramienta**                    |
| :------------------: | :--------------------------------: |
| Unitarias Backend    | Por definir                        |
| Unitarias Frontend   | Matriz de Pruebas                  |
| Integración Backend  | Por definir y Matriz de Pruebas    |
| Integración FrontEnd | Matriz de Pruebas                  |
| Sistema              | Pruebas en voz alta                |

