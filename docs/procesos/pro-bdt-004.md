# PRO-BDT-004 Estimación de requerimientos

v 6.0 / REQM, PP

## Propósito

El propósito del proceso es establecer, priorizar, validar y estimar los requerimientos que satisfagan la necesidad del cliente.

## Notas introductorias

Este proceso usa diversas terminologías del libro Ingeniería del Software de Ian Sommerville.

- Requisitos a nivel de usuario: Requerimientos funcionales en forma de una historia en lenguaje natural, que expresa a grandes rasgos la funcionalidad deseada.
- Requisitos a nivel de sistema: Una especificación más detallada de un requsito funcional, dónde existe una serie de pasos específicos que debe de realizar el sistema.

Los requerimientos y cambios a requerimientos vendrán solamente de los actores identificados en el Impact Mapping. <br/>
Antes de estimar es importarte revisar el WBS para tener un entendimiento real de lo que implica implementar un requerimiento.

## Involucrados

Team Members, Architecture Owner y Product Owner.

## Entradas

Plan de proyecto con la visión descrita.

## Salidas

- WBS Requerimiento
- Impact mapping
- Documento de Especificación de Requerimiento de Software (ERS)

## Descripción

| Fase         | Actividades                                                                                                                                                                                      | Responsables          | Prácticas Asociadas al CMMI |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | --------------------------- |
| Definición   | Realizar el WBS de la descomposición del trabajo de un requerimiento funcional                                                                                                                   | Team Members          | REQM SP1.5 <br/> PP SP1.1   |
| Definición   | Realizar el Impact Mapping                                                                                                                                                                       | Team Members <br/> PO | REQM SP1.1 <br/> REQM SP1.2 |
| Definición   | Consulta la guía [F-PRO-BDT-004A](https://docs.google.com/document/d/1qHcd7TAu7gmyZjP8_lm67frwzmqMsejDORm60FM9XU0/edit) para la elaboración de este producto basada en el estándar IEEE 830-1998 | Team Members <br/> AO | REQM SP1.1                  |
| Priorización | El PO prioriza los requerimientos que atienden la necesidad del cliente dividiéndolos en tres versiones MVP, MBI 1 y MBI 2                                                                       | PO                    | REQM SP1.5                  |
| Validación   | Los team members validan los requerimientos                                                                                                                                                      | Team Members          | REQM SP1.2                  |
| Validación   | Alinear el ERS con la visión del cliente                                                                                                                                                         | PO                    | REQM SP1.2                  |

## Control de cambios

| Versión | Cambio                                                                                                                                                                                                                                          | Autor del cambio                                                          | Aprobado por                      | Fecha de cambio |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------- | --------------- |
| v 1.0   | Realización del proceso.                                                                                                                                                                                                                        | Damariz Licea <br/> Alejandra Cabrera <br/> Uri Gopar <br/> Ramona Nájera |                                   | 24/02/2024      |
| v 2.0   | Se quitaron las fases de análisis de necesidad y definición de visión para llevarlas a cabo en el proceso [PRO-BDT-005 Definir visión del proyecto](pro-bdt-005.md) y [PRO-BDT-003 Identificación de la necesidad del cliente](pro-bdt-003.md). | Carlos Velasco                                                            | Alejandra Cabrera                 | 25/02/2024      |
| v 3.0   | Se usa la denominación del autor Ian Sommerville, “requerimientos de usuario” y “requerimientos de sistema”.                                                                                                                                    | Ricardo Fernández                                                         | Aprobado en Junta Departamental   | 26/02/2024      |
| v 4.0   | Intercambio en la secuencia de fases: primero se validan los requerimientos con el cliente y después se priorizan por el PO                                                                                                                     | Ricardo Fernández                                                         | Ramona Nájera <br/> Armando Rosas | 26/02/2024      |
| v 5.0   | La entrada cambio de una necesidad a algo tangible. Se agrego el wbs. Se renombraron las fases.                                                                                                                                                 | Alejandra Cabrera                                                         | Ricardo Fernández                 | 27/02/2024      |
| v 5.1   | Se agregaron notas introductorias explicando conceptos del libro _Ingenieria de Software_ de Ian Sommerville.                                                                                                                                   | Ricardo Fernández                                                         | Daniel Cajas                      | 05/03/2024      |
| v 6.0   | Aseguración de las fases en una guía [F-PRO-BDT-004A](https://docs.google.com/document/d/1qHcd7TAu7gmyZjP8_lm67frwzmqMsejDORm60FM9XU0/edit) con base en IEEE 830. <br/> Entradas y salidas tangibles. <br/> Cambio del orden de las fases       | Ricardo Fernández <br/> Alejandra Cabrera                                 | Olimpia García                    | 06/03/2024      |
