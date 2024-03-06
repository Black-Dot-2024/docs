# PRO-BDT-006 Gestión de solicitud de cambio de requerimientos

v 3.0 / REQM, RD

## Propósito

Manejar la solicitud para cambios, creación o deprecación de requerimientos posterior al acuerdo de requerimientos iniciales.

## Involucrados

Product Owner, Architecture Owner, Cliente.

## Entradas

Solicitud de cambio de requerimientos.

## Salidas

- Solicitud rechaza o aprobada.
- En caso de aprobación, Matriz de Trazabilidad actualizada.

## Descripción

| Fase          | Actividades                                                                                                                                                                                                                                                                                                                                                                           | Responsables       | Prácticas Asociadas al CMMI              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------- |
| Análisis      | Utilizar la plantilla [F-PRO-BDT-006A](f-pro-bdt-006a.md) para registrar la solicitud de cambio                                                                                                                                                                                                                                                                                       | PO                 | REQM SP1.1 <br> REQM SP1.3               |
| Evaluación    | Evaluar los cambios solicitados en base a los siguientes criterios: <ul><li>Aporta valor a la solución</li> <li>Se alinea con los objetivos del proyecto</li> <li>No compromete el calendario del proyecto</li> <li> No conlleva un retrabajo no justificado de funcionalidades ya planeadas o implementadas</li> <li>Es realizable con las habilidades técnicas del equipo</li></ul> | PO, AO, impactados | REQM SP1.2 <br> REQM SP1.3 <br> RD SP1.1 |
| Decisión      | Decidir si aceptar o no los cambios, definir bajo que condiciones y justificación                                                                                                                                                                                                                                                                                                     | Impactados         | REQM SP1.3                               |
| Negociación   | Comunicar al cliente la decisión inicial, condiciones y justificación                                                                                                                                                                                                                                                                                                                 | PO                 | REQM SP1.2                               |
| Negociación   | Llegar a un acuerdo con el cliente de la decisión tomada y ajustar los cambios en la solicitud                                                                                                                                                                                                                                                                                        | PO                 | REQM SP1.3                               |
| Documentación | Actualizar la Matriz de Trazabilidad de acuerdo a los cambios establecidos                                                                                                                                                                                                                                                                                                            | TL                 | REQM SP1.3 <br> REQM SP1.4 <br> RD SP1.1 |
| Documentación | Actualizar el Plan de Valor Ganado con los cambios                                                                                                                                                                                                                                                                                                                                    | TL                 | REQM SP1.5                               |

## Control de cambios

| Versión | Cambio                                                                                                                                                                              | Autor del cambio                         | Aprobado por   | Fecha de cambio |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------- | --------------- |
| v 1.0   | Creación del proceso.                                                                                                                                                               | Daniel Cajas                             | Uri Gopar      | 28/02/2024      |
| v 2.0   | Actualización de formato, adición de F-PRO-006A.                                                                                                                                    | Arturo Díaz                              | Daniel Cajas   | 05/03/2024      |
| v 3.0   | Actualización del contenido del proceso para incluir entradas y salidas tangibles. <br> Modificación a la fase de negociación y análisis. <br> Adición de la fase de documentación. | Alejandra Cabrera <br> Ricardo Fernández | Olimpia García | 06/03/2024      |
