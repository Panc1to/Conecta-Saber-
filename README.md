Conecta Saber - Plataforma de Cursos Online

Plataforma web minimalista y responsive para la venta de cursos online, desarrollada con Vue.js 3.

![Conecta Saber](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vue.js&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.4.0-339AF0?logo=font-awesome&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Características

- **Diseño Minimalista**: Interfaz limpia y moderna
- **Totalmente Responsive**: Adaptado para móvil, tablet y desktop
- **Sistema de Login**: Autenticación de usuarios con persistencia
- **Métodos de Pago**: Integración con tarjetas y PayPal
- **Filtrado de Cursos**: Sistema de categorías dinámico
- **Vue.js 3**: Framework reactivo y moderno
- **Font Awesome**: Iconos profesionales
- **LocalStorage**: Sesiones persistentes

## 🚀 Demo en Vivo

[Ver Demo](#) _(Agrega aquí el link cuando lo despliegues)_

Requisitos Previos

No se requiere instalación de dependencias. El proyecto usa CDN para todas las librerías:
- Vue.js 3
- Font Awesome 6.4.0
- Google Fonts (Inter)

Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/conecta-saber.git
cd conecta-saber
```

2. **Abrir el proyecto**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local como Live Server

Estructura del Proyecto

```
conecta-saber/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS responsivos
├── app.js              # Lógica de Vue.js
├── README.md           # Documentación
├── ICONOS_FONT_AWESOME.md  # Guía de iconos
└── .gitignore          # Archivos ignorados por Git
```

Funcionalidades

Sistema de Autenticación
- Login con email y contraseña
- Opción "Recordarme" con localStorage
- Validación de sesión
- Cierre de sesión

Catálogo de Cursos
- 6 cursos en diferentes categorías
- Filtrado por categoría (Todos, Programación, Diseño, Negocios, Marketing)
- Tarjetas con información detallada
- Imágenes de alta calidad

Sistema de Pago
- Selección de método de pago (Tarjeta/PayPal)
- Formulario de tarjeta de crédito/débito
- Resumen del curso antes del pago
- Validación de campos

Paleta de Colores

```css
--primary-color: #2563eb    /* Azul principal */
--primary-dark: #1e40af     /* Azul oscuro */
--secondary-color: #f59e0b  /* Naranja */
--text-dark: #1f2937        /* Texto oscuro */
--text-light: #6b7280       /* Texto claro */
--bg-light: #f9fafb         /* Fondo claro */
```

Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Variables CSS, Animaciones
- **JavaScript (ES6+)**: Sintaxis moderna
- **Vue.js 3**: Framework reactivo
- **Font Awesome**: Biblioteca de iconos
- **Google Fonts**: Tipografía Inter

Responsive Design

El sitio está optimizado para diferentes tamaños de pantalla:
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 769px
- **Large Desktop**: > 1400px

Personalización

Agregar un Nuevo Curso

Edita el array `courses` en `app.js`:

```javascript
{
    id: 7,
    title: 'Nombre del Curso',
    description: 'Descripción del curso',
    category: 'Categoría',
    image: 'URL_de_imagen',
    level: 'Principiante',
    duration: '30 horas',
    students: '1,000',
    price: '$79'
}
```

Cambiar Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #tu-color;
    --secondary-color: #tu-color;
}
```

Despliegue

GitHub Pages

1. Ve a Settings > Pages en tu repositorio
2. Selecciona la rama `main` y carpeta `root`
3. Guarda y espera unos minutos
4. Tu sitio estará en `https://tu-usuario.github.io/conecta-saber`

Netlify

1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. Tu sitio estará desplegado instantáneamente

Vercel

```bash
npm i -g vercel
vercel
```

Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

Autor

**Tu Nombre**
- GitHub: [@Panc1to](https://github.com/tu-usuario)




---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!

**Hecho con ❤️ y Vue.js**
