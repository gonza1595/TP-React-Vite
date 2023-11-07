# React + TypeScript + Vite

Pequeño proyecto donde tenemos un Home que seria la pagina principal del proyecto, donde se veran distintos componentes como un Header, Carousel, Cards y un Footer. Hemos usado para el diseño react-bootstrap.

Luego tenemos la ruta Componentes donde dentro de ella hay 3 ejemplos distintos, donde utilizamos props para psar datos entre distintos componentes.

- Ejemplo 1: Vamos a pasar un valor numerico el cual dependiendo que numero sea va a poner de diferente color la barra.
- Ejemplo 2: Tenemos una cajita de texto donde nosotros podemos escribir lo que queramos y cuando hacemos click en "Enviar" nos va a devolver como un mensaje recibido lo que hayamos escrito.
- Ejemplo 3: Hay un boton "Cambiar Color" en el cual hacemos click y nos va a abrir un modal que tiene una opcion elegir color, podemos elegir el color que queremos y el boton "Cambiar color" se pondra del color que hayamos elegido.

Por ultimo tenemos una ruta llamada Administracion donde vamos a tener una tabla con distintos productos con su titulo, precio, descripcion, categoria e imagen. Estos productos los consumimos de la API https://fakestoreapi.com/. Podremos crear nuevos productos, editar y eliminar los productos.

-Tecnologias usadas

- react-bootstrap
- react-bootstrap- icons
- YUP (Es una biblioteca de valdiacion para Javascript que te permite definir reglas para validar datos facilmente, es una herramienta para asegurarte de que los datos tengan el formato correcto)
- Formik (Es una biblioteca de manejo de formularios para React)
  -react-toastify (Para las notificaciones)

Para poder ejecutar este proyecto deberas clonar este repositorio, abrir visual studio code y escribir en la terminal el siguiente comando: npm install. De esta forma instalaras todas las dependencias necesarias para poder ejecutarlo. Luego en la terminal deberas escribir "cd .\Practico-React-Vite-Typescript\" sin las comillas para acceder a la carpeta del proyecto. Para finalizar deberas ejecutar el comando "npm run dev" y te aparecera en la terminal Local: http://127.0.0.1:5173/, tienes que hacer "ctrl + click" en la URL y te abrira el proyecto en el navegador.
