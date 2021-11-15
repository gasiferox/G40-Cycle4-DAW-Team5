# Grupo 40 - Cicle 4 - Desarollo Aplicaciones Web

## The Assemblers - Team 5

## Members

- Gustavo Romero - Leader
- María Patricia Guevara - Admin
- Freddy Alberto Herrera - Tester
- Leonardo Jiménez - Soft Design
- Juan Diego Varón - UI Design

## Proyecto Inmobiliaria

### Instalación

Para instalar la aplicación desde el __main__ hacerlo con:

```
git clone https://github.com/gasiferox/G40-Cycle4-DAW-Team5.git
```

Para actualizar desde el __main__

```
cd G40-Cycle4-DAW-Team5

git pull origin main
```

<<<<<<< HEAD
Una vez instalado actualizamos los paquetes requeridos con:

=======
Una vez instalado actualizar los paquetes requeridos con:
>>>>>>> 37fb6ba77dbcac0e764714e0bdb2a20ab60ee33b
```
npm i
```

Ejecutar la aplicación con:

```
npm run start
```

<<<<<<< HEAD
## Trabajando desde la rama propia del `dev`

Realizar el cambio hacia la rama de cada dev con:

Primero descargar la rama de cada uno:

=======
---
## Control del versiones

### Trabajando desde la rama propia del `dev`
Realizar el cambio hacia la rama de cada dev con:

Descargar la rama de cada uno:
>>>>>>> 37fb6ba77dbcac0e764714e0bdb2a20ab60ee33b
```
git pull origin dev[i]
```

Cambiarse de rama a la que corresponda con:

```
git checkout dev1 <-- (Gustavo)
git checkout dev2 <-- (Maria Patricia)
git checkout dev3 <-- (Freddy)
git checkout dev4 <-- (Juan)
git checkout dev5 <-- (Leonardo)
```

<<<<<<< HEAD
Después de cambios actualizar la rama con:

=======
Después de realizar cambios actualizar la rama propia con:
>>>>>>> 37fb6ba77dbcac0e764714e0bdb2a20ab60ee33b
```
git add .
git commit -am "dev[i]-> comentario con descripción de cambios"
git pull origin dev[i]
git push origin dev[i]
```

---

## Conexión a la base de datos

Utilizando el string de conexión dentro del `MongoDB`

La conexión se va a generar medianta la creación del archivo `.env` ubicado en la carpeta `/server` del proyecto y dentro de este estará incluida la cadena de conexión dentro de la variable `MONGODB_URI`, la cual será suministrada por el edministrador del proyecto.

---
## Backend

### Dcoumentación API

La API tiene un endpoint general en el entorno de desarrollo local, el cual es:

```
http://localhost:7500/api
```

La API cuenta con tres entidades de consulta, `usuarios`, `propiedades` y `ubicaciones`.

A continuación los endpoints para los diferentes tipos de transacción a realizar con la API.

### Endpoints
__(v 1.0.0)__

1. Usuarios

| Entidad | Funcionalidad | Método | Endpoint |
| -- | -- | -- | -- |
| Usuario | Get all | GET | /users |
|  | Get user by id | GET | /users/id |
|  | Create user* | POST | /users |
|  | Update user* | PUT | /users/id |
|  | Delete user | DELETE | /users/id |

|  |
|:--:|
| *Enpoints para usuarios* |

*Para los métodos `crear` y `actualizar` usuario se debe incluir la siguiente estructura en el `body` del `request`

```
{
    "nombres": "",
    "apellidos": "",
    "documento": "",
    "telefono": "",
    "email": "",
    "clave": ""
}
```

2. Propiedades

| Entidad | Funcionalidad | Método | Endpoint |
| -- | -- | -- | -- |
| Propiedad | Get all | GET | /properties |
|  | Get property by id | GET | /properties/id |
|  | Create property* | POST | /properties |
|  | Update property* | PUT | /properties/id |
|  | Delete property | DELETE | /properties/id |

|  | 
|:--:|
| *Enpoints para propiedades* |

*Para los métodos `crear` y `actualizar` propiedades se debe incluir la siguiente estructura en el `body` del `request`

```
{
    "tipo": "casa",
    "ubicacion": "61907f659569dfc8b50001df",
    "area": 100,
    "precio": 1000000000,
    "habitaciones": 4,
    "baños": 4,
    "parqueadero": true,
    "descripcion": "Casa campestre",
    "imagenes": "ubicacionDelArchivo"
}
```

3. Ubicaciones

| Entidad | Funcionalidad | Método | Endpoint |
| -- | -- | -- | -- |
| Ubicación | Get all | GET | /properties |
|  | Get location by id | GET | /properties/id |
|  | Create location* | POST | /properties |
|  | Update location* | PUT | /properties/id |
|  | Delete location | DELETE | /properties/id |

|  | 
|:--:|
| *Enpoints para ubicaciones* |

*Para los métodos `crear` y `actualizar` ubicación se debe incluir la siguiente estructura en el `body` del `request`

```
<<<<<<< HEAD

=======
`connectionString = 'mongodb+srv://team5:<password>@clusterteam5.dix94.mongodb.net/inmobiliaria?retryWrites=true&w=majority'`
>>>>>>> 2f2620487b762447c26d460f47b1f75448015e6b
=======
{
    "departamento": "Risaralda",
    "ciudad": "Pereira",
    "zona": "Este",
    "vereda": "Tribunas",
    "direccion": "Km 6, via armenia, casa 3"
}
```
>>>>>>> 37fb6ba77dbcac0e764714e0bdb2a20ab60ee33b
