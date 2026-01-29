# Next.js + Sanity CMS Project

Este proyecto está configurado con **Next.js 15** (App Router) y **Sanity CMS** para gestión de contenido headless y sistema de blog.

## 🚀 Stack Tecnológico

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Type safety en todo el proyecto
- **Sanity CMS** - Sistema de gestión de contenido headless
- **Tailwind CSS** - Framework de estilos utility-first

## 📁 Estructura del Proyecto

```
nextjs-sanity-project/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal con navegación
│   │   ├── page.tsx           # Landing page
│   │   ├── blog/              # Rutas del blog
│   │   │   ├── page.tsx       # Lista de posts
│   │   │   └── [slug]/        # Post individual (dinámico)
│   │   └── studio/            # Sanity Studio embebido
│   └── lib/
│       └── sanity-client.ts   # Cliente y queries de Sanity
├── schemas/                    # Schemas de Sanity CMS
│   ├── index.ts               # Exportador de schemas
│   ├── author.ts              # Schema de autores
│   ├── post.ts                # Schema de posts
│   └── page.ts                # Schema de páginas
├── sanity.config.ts           # Configuración de Sanity Studio
├── sanity.cli.ts              # CLI de Sanity
├── .env.local                 # Variables de entorno
└── package.json
```

## ⚙️ Configuración Inicial

### 1. Instalar Dependencias

Las dependencias ya están instaladas, pero si necesitas reinstalarlas:

```bash
npm install
```

### 2. Configurar Sanity

**Opción A: Crear un nuevo proyecto Sanity**

1. Ve a [sanity.io](https://sanity.io) y crea una cuenta (si no tienes una)
2. Crea un nuevo proyecto en el dashboard de Sanity
3. Copia el **Project ID** que te proporcionan
4. Actualiza el archivo `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

**Opción B: Usar la CLI de Sanity (si ya tienes cuenta)**

```bash
npx sanity init --project-id tu_project_id --dataset production
```

### 3. Iniciar el Proyecto

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:
- **Next.js App**: [http://localhost:3000](http://localhost:3000)
- **Sanity Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📝 Uso de Sanity CMS

### Acceder a Sanity Studio

1. Navega a [http://localhost:3000/studio](http://localhost:3000/studio)
2. Inicia sesión con tu cuenta de Sanity
3. Verás el panel de administración con estos tipos de contenido:
   - **Blog Post**: Posts del blog
   - **Author**: Autores de posts
   - **Page**: Páginas de contenido estático

### Crear tu Primer Post

1. En Sanity Studio, haz clic en "Blog Post"
2. Haz clic en "Create" o el botón "+"
3. Rellena los campos:
   - **Title**: Título del post
   - **Slug**: Se genera automáticamente desde el título
   - **Author**: Selecciona o crea un autor
   - **Main Image**: Sube una imagen principal
   - **Categories**: Añade categorías (opcional)
   - **Published At**: Fecha de publicación
   - **Excerpt**: Resumen breve
   - **Body**: Contenido del post (editor rich text)
4. Haz clic en "Publish"

El post aparecerá automáticamente en [http://localhost:3000/blog](http://localhost:3000/blog)

## 🎨 Estructura de la Landing Page

La landing page (`src/app/page.tsx`) tiene una estructura básica sin diseño específico:

- **Hero Section**: Título principal y CTAs
- **Features Section**: Grid con características del proyecto
- **About Section**: Información sobre el proyecto

Esta estructura está lista para que agregues tu propio diseño y estilos.

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm start            # Inicia el servidor de producción

# Validación
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos de TypeScript
```

## 📚 Schemas de Sanity

### Post (Blog)
- `title` - Título del post
- `slug` - URL amigable
- `author` - Referencia al autor
- `mainImage` - Imagen principal
- `categories` - Array de categorías
- `publishedAt` - Fecha de publicación
- `excerpt` - Resumen
- `body` - Contenido (Portable Text)

### Author
- `name` - Nombre del autor
- `slug` - URL amigable
- `image` - Foto del autor
- `bio` - Biografía

### Page
- `title` - Título de la página
- `slug` - URL amigable
- `content` - Contenido (Portable Text)
- `seo` - Metadata SEO (título y descripción)

## 🔗 Funciones Helper de Sanity

El archivo `src/lib/sanity-client.ts` incluye funciones útiles:

```typescript
// Obtener todos los posts
const posts = await getAllPosts()

// Obtener un post por slug
const post = await getPostBySlug('mi-primer-post')

// Obtener una página por slug
const page = await getPageBySlug('about')

// Generar URL de imagen
const imageUrl = urlForImage(image).width(800).url()
```

## 🌐 Rutas de la Aplicación

- `/` - Landing page
- `/blog` - Lista de posts del blog
- `/blog/[slug]` - Post individual
- `/studio` - Sanity Studio (CMS) - **Privado, solo accesible por URL directa**

## 🔒 Privacidad del Studio

El Sanity Studio está configurado para ser **privado**:

- ✅ **No aparece en la navegación pública**
- ✅ **No hay links directos** desde la UI pública
- ✅ **Requiere autenticación** de Sanity para acceder
- ✅ **Solo accesible** vía URL directa: `/studio`

Para acceder al CMS, conoce la URL exacta y ten credenciales válidas de Sanity.

## ⚡ Optimización y Caché

Este proyecto implementa una **estrategia de caché agresiva** para minimizar el consumo de recursos de Sanity:

### Configuración Actual

- **CDN de Sanity habilitado**: Caché global en edge
- **ISR (Incremental Static Regeneration)**: Páginas se regeneran cada 1 hora
- **Reducción de requests**: ~99% menos llamadas a la API

### Beneficios

| Métrica | Resultado |
|---------|-----------|
| Velocidad de carga | Ultra-rápida (~50ms) |
| Requests a Sanity | Mínimos (24/día por página) |
| Costo | Gratuito incluso con alto tráfico |

📖 **Detalles completos**: Ver `ESTRATEGIA_CACHE.md`

## 🔐 Variables de Entorno

Asegúrate de configurar estas variables en `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

> **Nota**: Las variables que empiezan con `NEXT_PUBLIC_` están disponibles en el cliente.

## 🚀 Deploy

### Deploy en Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las variables de entorno en Vercel
4. Deploy automático

### Deploy del Studio

El Sanity Studio está embebido en `/studio`, por lo que se despliega automáticamente con tu app Next.js.

## 📖 Próximos Pasos

1. **Personalizar el diseño**: Agrega estilos a la landing page y componentes
2. **Crear autores**: En Sanity Studio, crea perfiles de autores
3. **Publicar contenido**: Crea posts en Sanity Studio
4. **Extender schemas**: Añade nuevos tipos de contenido según tus necesidades
5. **Configurar SEO**: Personaliza metadata en cada página

## 🆘 Solución de Problemas

### Error: "Invalid projectId or dataset"

- Verifica que las variables de entorno estén configuradas correctamente
- Asegúrate de haber creado el proyecto en sanity.io

### Los posts no aparecen

- Verifica que hayas publicado los posts (no solo guardado como borrador)
- Revisa que el `publishedAt` tenga una fecha válida

### Error de tipos de TypeScript

Ejecuta:
```bash
npm run type-check
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
