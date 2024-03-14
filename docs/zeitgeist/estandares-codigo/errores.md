# ERRORS MESSAGE STANDARD

Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

1. Respuestas satisfactorias (`200`–`299`),
2. Redirecciones (`300`–`399`),
3. Errores de los clientes (`400`–`499`),
4. y errores de los servidores (`500`–`599`)

## RESPUESTAS SATISFACTORIAS

- `GET`: El recurso se ha obtenido y se transmite en el cuerpo del mensaje.
- `PUT` o `POST`: El recurso que describe el resultado de la acción se transmite en el cuerpo del mensaje.
- `DELETE`: Envía una petición para eliminar un recurso

`200 OK` La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP:

`201 Created` La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT.

`204 No Content` La petición se ha completado con éxito pero su respuesta no tiene ningún contenido, aunque los encabezados pueden ser útiles. El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores.

## ERRORES DEL CLIENTE

`400 Bad Request`Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.

`401 Unauthorized`Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.

`403 Forbidden`El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.

`404 Not Found`El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.

`408 Request Timeout` Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+, o IE9, usa mecanismos de pre-conexión HTTP para acelerar la navegación. También hay que tener en cuenta que algunos servidores simplemente desconecta la conexión sin enviar este mensaje.

`415 Unsupported Media Type` El formato multimedia de los datos solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.

`429 Too Many Requests` El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado.

## ERRORES DEL SERVIDOR

`500 Internal Server Error`El servidor ha encontrado una situación que no sabe cómo manejarla.

`502 Bad Gateway`Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.

`504 Gateway Timeout`Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.
