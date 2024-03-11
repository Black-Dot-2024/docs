# EST-BDT-006 Estándar para commits de código

v 1.0

## Propósito

El propósito de este documento es establecer un estándar para la creación de commits en los repositorios de código de Black Dot, con el fin de garantizar la consistencia, la accesibilidad y la trazabilidad de los cambios realizados en el código de la organización.

## Notas introductorias

Los commits proporcionan un sistema claro y eficiente para la revisión y aprobación de cambios en el código de la organización, facilitando la gestión y el acceso a la información en los repositorios de Black Dot.

## Involucrados

Equipo de desarrollo de Black Dot.

## Entradas

Registro o cambios en los repositorios de código de Black Dot.

## Salidas

Creación de commits para la revisión y aprobación de cambios en los repositorios de código de Black Dot.

## Descripción

La estructura de los mensajes de commit seguirá el [estándar](https://medium.com/@fatihsevencan/git-commit-standards-d76f2f5f5c7f) convencional de mensajes de commit, utilizando los siguientes prefijos:

- **feat**: Nueva funcionalidad
- **fix**: Corrección de errores
- **docs**: Cambios en la documentación
- **style**: Cambios que no afectan el significado del código (espacios en blanco, formato, punto y coma que faltan, etc.)
- **refactor**: Cambios en el código que no corrigen errores ni agregan funcionalidades
- **test**: Agregar pruebas faltantes o corregir pruebas existentes
- **chore**: Cambios en el proceso de construcción o herramientas auxiliares y bibliotecas como generación de documentación, etc.

Además, se podrá utilizar el prefijo **BREAKING CHANGE** en el mensaje de commit para indicar que el cambio realizado es una modificación que rompe la compatibilidad con versiones anteriores.

### Estructura del mensaje de commit

El mensaje de commit debe tener la siguiente estructura:

```{git}
<tipo>(<área>): <descripción>
```

## Control de cambios

| Versión | Cambio                | Autor del cambio | Aprobado por | Fecha de cambio |
| ------- | --------------------- | ---------------- | ------------ | --------------- |
| v 1.0   | Creación del estándar | Carlos Salguero  | Pendiente    | 11/03/2024      |
