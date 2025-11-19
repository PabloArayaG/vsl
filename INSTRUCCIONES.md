# 🚀 Instrucciones de Instalación y Desarrollo

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## 🔧 Instalación

1. **Instala las dependencias:**

```bash
npm install
```

## 🏃‍♂️ Ejecutar en Desarrollo

```bash
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

## 📦 Vista Previa de Producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
vsl/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes de React
│   │   ├── Header/       # Cabecera con logo
│   │   ├── Hero/         # Sección principal con título y video
│   │   ├── ContactForm/  # Formulario de contacto
│   │   ├── Problems/     # Sección de problemas
│   │   ├── Implementation/ # Sección de implementación
│   │   ├── Stats/        # Estadísticas y casos de éxito
│   │   ├── About/        # Información sobre Camilo López
│   │   └── Footer/       # Pie de página con CTA
│   ├── styles/           # Estilos globales y variables
│   ├── types/            # Definiciones de TypeScript
│   ├── App.tsx           # Componente principal
│   └── main.tsx          # Punto de entrada
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `src/styles/global.css`:

- `--color-primary`: #FDB813 (Amarillo/dorado)
- `--color-secondary`: #2C4F7C (Azul)
- `--color-background`: #000000 (Negro)

### Componentes

Cada componente tiene su propio archivo `.tsx` y `.css`:

- **Header**: Logo y badge de empresas grandes
- **Hero**: Título principal con rating de estrellas y video
- **ContactForm**: Formulario completo con validación
- **Problems**: 3 tarjetas con problemas principales
- **Implementation**: 3 características de implementación
- **Stats**: Casos de éxito con logos de empresas
- **About**: Información sobre el CEO
- **Footer**: CTA final y logo

## 🔄 Próximos Pasos Recomendados

1. **Reemplazar el video placeholder** en `Hero.tsx` con tu video real
2. **Agregar logos reales** de empresas (Cencosud, Walmart, etc.) en `Stats.tsx`
3. **Agregar foto real** de Camilo López en `About.tsx`
4. **Configurar el envío del formulario** conectando a tu backend/API
5. **Agregar analytics** (Google Analytics, etc.)
6. **Optimizar SEO** con meta tags apropiados

## 🎥 Integración de Video

Para integrar un video real en la sección Hero, reemplaza el contenido de `.video-placeholder` en `Hero.tsx`:

```tsx
<div className="video-container">
  <iframe
    src="TU_URL_DE_VIDEO"
    title="Los 7 pasos"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

## 📧 Configuración del Formulario

El formulario en `ContactForm.tsx` actualmente solo hace `console.log`. Para conectarlo a tu backend:

1. Instala axios o usa fetch
2. Modifica la función `handleSubmit` para enviar los datos
3. Agrega validación adicional si es necesario
4. Implementa mensajes de éxito/error

## 🌐 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Arrastra la carpeta dist/ a netlify.com
```

## ❓ Soporte

Si tienes preguntas o problemas, revisa:
- La documentación de [Vite](https://vitejs.dev/)
- La documentación de [React](https://react.dev/)
- La documentación de [TypeScript](https://www.typescriptlang.org/)

---

**Desarrollado con ❤️ para Odereso**

