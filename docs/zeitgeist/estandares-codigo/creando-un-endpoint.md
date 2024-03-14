# ESTRUCTURA DE UN ENDPOINT

```{bash}
BASE_URL/api/v{version}/{entidad}/{atributo}
```

- **BASE_URL**: URL base de la API.
- **version**: Versión de la API.
- **entidad**: Nombre de la entidad a la que se quiere acceder, crear, modificar o eliminar.
- **atributo**: Atributo de la entidad

## Operaciones CRUD

### Create

Para crear una entidad se hace un POST al endpoint respectivo con el body conteniendo los datos requeridos.

### Read

Para consultar una entidad específica se consulta al endpoint de la entidad con GET con su ID. Para consultar toda una lista se hace un GET al endpoint sin un ID específico.

### Update

Para modificar una entidad se hace un PUT al endpoint respectivo, especificando el ID de la entidad a modificar.

### Delete

Para eliminar una entidad se hace un DELETE al endpoint respectivo, especificando el ID de la entidad a eliminar.
