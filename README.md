# React + Vite

Para los componentes de React: components
Para las funciones auxiliares y las solicitudes de la API: utils
Para las imágenes: images
Para los recursos third-party, como las fuentes: vendor

Aquí tienes una lista inicial de los componentes mínimos que necesitarás para este proyecto:
App: el componente raíz de la aplicación, creado por CRA
Main: el componente de la página principal
Header: el componente que renderiza el encabezado de la página
Navigation: responsable del menú de navegación
About: un componente de presentación que muestra información sobre el autor
Footer: un componente de presentación que muestra el pie de página
Preloader: responsable del preloader

3. Rutas
   Implementa las rutas necesarias. Debería haber al menos dos de ellas:
   La ruta / debe mostrar la página principal del proyecto.
   Otra ruta con un nombre personalizado debe mostrar los datos recibidos de la API.

HTML:
se utiliza la sintaxis JSX correcta;
se utiliza HTML semántico;
todas las clases están nombradas según las especificaciones de BEM;
la navegación funciona correctamente y no hay enlaces rotos.

CSS:
los elementos se organizan mediante un diseño flex o grid-layout;
el diseño es totalmente responsivo en los dispositivos móviles y no tiene un desplazamiento horizontal para cada resolución de pantalla;
las fuentes se conectan mediante @font-face;
todos los elementos están colocados correctamente;
se implementan microanimaciones de botones, enlaces y campos de entrada;
se utiliza normalize.сss, o las hojas de estilo se escriben siguiendo estrictamente BEM sin ningún archivo externo;
los formularios y los marcadores de posición tienen un estilo correcto;
se utilizan bloques reutilizables en todo el proyecto;
todas las imágenes están optimizadas, incluidas las .svg.
