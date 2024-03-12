# PRO-BDT-013 Gestión de Pull Requests

v 1.0 / GP

## Propósito

El propósito de este documento es establecer un estándar para la gestión de Pull Requests en los repositorios de código de Black Dot, con el fin de garantizar la consistencia, la accesibilidad y la trazabilidad de los cambios realizados en el código de la organización.

## Involucrados

- Equipo de desarrollo de Black Dot.

## Entradas

- Pull Request creado por un desarrollador
- Código fuente de la organización
- Documentación relevante
- Casos de prueba (si aplica)

## Salidas

- Pull Request revisado y aprobado
- Código fuente integrado en la rama principal del repositorio

## Descripción

| Fase        | Actividades                                                                                                                                                                                            | Responsable   | Prácticas asociadas al CMMI |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | --------------------------- |
| Creación    | Crear un pull request en el repositorio del código, especificando la rama de origen y destino utilizando el estándar de Pull Requests de Black Dot.                                                    | Desarrollador | GP 2.1, GP 2.2              |
| Revisión    | Revisar el código fuente modificado en el Pull Request, identificar posibles problemas o mejoras, y proporcionar comentarios constructivos. Verificar que los cambios pasen las pruebas automatizadas. | Revisor       | GP 2.3, GP 2.4              |
| Aprobación  | Aprobar el Pull Request si cumple con los criterios de aceptación y está listo para ser fusionado en la rama principal del repositorio.                                                                | Revisor       | GP 2.5, GP 2.6              |
| Integración | Integrar el Pull Request en la rama principal del repositorio, una vez que ha sido aprobado.                                                                                                           | Desarrollador | GP 2.7, GP 2.8              |
| Cierre      | Cerrar el Pull Request una vez que ha sido fusionado en la rama principal del repositorio.                                                                                                             | Desarrollador | GP 2.9, GP 2.10             |

## Control de cambios

| Versión | Cambio                                                               | Autor del cambio | Aprobado por | Fecha de cambio |
| ------- | -------------------------------------------------------------------- | ---------------- | ------------ | --------------- |
| v 1.0   | Creación del estándar para la gestión de Pull Requests en Black Dot. | Carlos Salguero  | pendiente    | 11/03/2024      |
