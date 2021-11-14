# G40 Cicle4 DAW Team 5

## Proyecto Inmobiliaria

Para instalar la aplicación desde el __main__ hacerlo con:
```
git clone https://github.com/gasiferox/G40-Cycle4-DAW-Team5.git
```

Para actualizar desde el __main__
```
cd G40-Cycle4-DAW-Team5

git pull origin main
```

Una vez instalado actualizamos los paquetes requeridos con:
```
npm i
```

Ejecutar la aplicación con:
``` 
npm run start
```

## Trabajando desde la rama propia del `dev`
Realizar el cambio hacia la rama de cada dev con:

Primero descargar la rama de cada uno:
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

Después de cambios actualizar la rama con:
```
git add .
git commit -am "dev[]-> comentario con descripción de cambios"
git pull origin dev[i]
git push origin dev[i]
```

### Conexión a la base de datos `MongoDB`

Utilizando el string de conexión dentro del `MongoDB`

La conexión se va a generar medianta la creación del archivo `.env` ubicado en la raiz del proyecto y dentro de este estará incluida la cadena de conexión dentro de la variable `MONGODB_URI`

```
MONGODB_URI = ''
```
