# Guía de Configuración de Sanity CMS

Esta guía te ayudará a configurar Sanity CMS paso a paso para tu proyecto Next.js.

## 📋 Índice

1. [Crear Cuenta en Sanity](#1-crear-cuenta-en-sanity)
2. [Crear Proyecto](#2-crear-proyecto)
3. [Configurar Variables de Entorno](#3-configurar-variables-de-entorno)
4. [Acceder a Sanity Studio](#4-acceder-a-sanity-studio)
5. [Crear Contenido](#5-crear-contenido)

---

## 1. Crear Cuenta en Sanity

### Pasos:

1. Ve a [https://www.sanity.io/](https://www.sanity.io/)
2. Haz clic en **"Get Started"** o **"Sign Up"**
3. Puedes registrarte con:
   - GitHub (recomendado)
   - Google
   - Email y contraseña

![Sanity Login](https://www.sanity.io/static/images/opengraph/social.png)

---

## 2. Crear Proyecto

### Opción A: Desde el Dashboard Web

1. Una vez iniciada sesión, accede al [dashboard de Sanity](https://www.sanity.io/manage)
2. Haz clic en **"Create Project"** o **"+ New Project"**
3. Completa la información:
   - **Project Name**: `nextjs-sanity-project` (o el nombre que prefieras)
   - **Organization**: Selecciona tu organización o crea una nueva
4. Haz clic en **"Create"**
5. **Copia el Project ID** que aparece (lo necesitarás más adelante)

### Opción B: Desde la Terminal

Si prefieres usar la CLI de Sanity:

```bash
# Instalar Sanity CLI globalmente (opcional)
npm install -g @sanity/cli

# Inicializar proyecto
sanity init
```

Sigue las instrucciones interactivas:
- Selecciona "Create new project"
- Nombra tu proyecto
- Confirma el dataset (usa "production")

---

## 3. Configurar Variables de Entorno

### Obtener Project ID

Si creaste el proyecto desde el dashboard:
1. Ve a [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Selecciona tu proyecto
3. En la página del proyecto, verás el **Project ID** en la parte superior

### Actualizar .env.local

1. Abre el archivo `.env.local` en la raíz de tu proyecto
2. Reemplaza los valores:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz  # Tu Project ID aquí
NEXT_PUBLIC_SANITY_DATASET=production
```

**Ejemplo real:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=4h2k9m3p
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 4. Acceder a Sanity Studio

### Configurar CORS

Para que Sanity Studio funcione desde `localhost`, necesitas configurar CORS:

1. Ve a [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Selecciona tu proyecto
3. Ve a **"API"** en el menú lateral
4. Haz clic en **"CORS Origins"**
5. Haz clic en **"Add CORS origin"**
6. Agrega:
   - **Origin**: `http://localhost:3000`
   - **Allow credentials**: ✅ Marcar
7. Haz clic en **"Save"**

**Para producción**, repite el proceso con tu dominio de producción (ej: `https://tudominio.com`)

### Iniciar Studio

1. Asegúrate de que el servidor de desarrollo esté corriendo:
   ```bash
   npm run dev
   ```

2. Abre tu navegador en: [http://localhost:3000/studio](http://localhost:3000/studio)

3. Te pedirá que inicies sesión con tu cuenta de Sanity

4. Una vez autenticado, verás el panel de administración

---

## 5. Crear Contenido

### Crear un Autor

Los posts necesitan un autor, así que comencemos creando uno:

1. En Sanity Studio, haz clic en **"Author"** en el menú lateral
2. Haz clic en el botón **"+"** o **"Create new"**
3. Completa los campos:
   - **Name**: Tu nombre (ej: "Juan Pérez")
   - **Slug**: Haz clic en "Generate" para crear el slug automáticamente
   - **Image**: (Opcional) Sube una foto
   - **Bio**: (Opcional) Escribe una breve biografía
4. Haz clic en **"Publish"**

### Crear un Post de Blog

1. En Sanity Studio, haz clic en **"Blog Post"** en el menú lateral
2. Haz clic en el botón **"+"** o **"Create new"**
3. Completa los campos:

   **Campos obligatorios:**
   - **Title**: "Mi Primer Post" (o el título que desees)
   - **Slug**: Haz clic en "Generate" para crear el slug desde el título
   - **Published At**: Selecciona la fecha y hora de publicación

   **Campos opcionales:**
   - **Author**: Selecciona el autor que creaste anteriormente
   - **Main Image**: Sube una imagen principal
   - **Categories**: Añade categorías (ej: "Tecnología", "Tutorial")
   - **Excerpt**: Escribe un resumen breve del post
   - **Body**: Escribe el contenido completo usando el editor rich text

4. Haz clic en **"Publish"**

### Verificar el Contenido

1. Ve a [http://localhost:3000/blog](http://localhost:3000/blog)
2. Deberías ver tu post listado
3. Haz clic en el post para ver la página completa

---

## 🎨 Editor de Contenido (Portable Text)

El campo **Body** de los posts usa Portable Text, un editor rico que soporta:

- **Texto formateado**: Negrita, cursiva, subrayado
- **Headings**: H1, H2, H3, etc.
- **Listas**: Ordenadas y desordenadas
- **Links**: Enlaces externos e internos
- **Imágenes**: Insertar imágenes en el contenido
- **Código**: Bloques de código

### Ejemplo de uso:

1. Escribe texto normal
2. Selecciona texto y formatea con los botones de la barra
3. Haz clic en "+" para agregar bloques especiales (imágenes, código, etc.)

---

## 🔑 Tokens de API (Opcional)

Si necesitas acceder a contenido privado o usar la API de Sanity de forma más avanzada:

1. Ve a [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Selecciona tu proyecto
3. Ve a **"API"** → **"Tokens"**
4. Haz clic en **"Add API token"**
5. Configura:
   - **Label**: "Next.js App"
   - **Permissions**: "Read" (para solo lectura) o "Write" (para lectura/escritura)
6. Copia el token generado
7. Agrégalo a `.env.local`:
   ```env
   SANITY_API_READ_TOKEN=tu_token_aqui
   ```

> ⚠️ **Importante**: Nunca compartas ni subas tus tokens a repositorios públicos.

---

## 🌐 Deploy de Sanity Studio

El Studio ya está embebido en tu app Next.js en la ruta `/studio`, por lo que se desplegará automáticamente cuando despliegues tu aplicación.

### Configurar para Producción:

1. Despliega tu app Next.js (ej: en Vercel)
2. Agrega las variables de entorno en tu plataforma de hosting
3. Agrega tu dominio de producción a CORS Origins en Sanity:
   - Origin: `https://tudominio.com`
   - Allow credentials: ✅

---

## 📊 Dataset y Environments

Sanity soporta múltiples datasets para diferentes ambientes:

- **production**: Para contenido en vivo
- **staging**: Para contenido de prueba
- **development**: Para desarrollo local

Para crear un nuevo dataset:
1. Ve al dashboard de tu proyecto en Sanity
2. Ve a **"Datasets"**
3. Crea el dataset que necesites

Actualiza `.env.local` según el dataset que uses:
```env
NEXT_PUBLIC_SANITY_DATASET=staging  # o development
```

---

## 🆘 Problemas Comunes

### "Invalid projectId or dataset"
- Verifica que el Project ID en `.env.local` sea correcto
- Reinicia el servidor de desarrollo después de cambiar las variables de entorno

### "Unauthorized" en Studio
- Asegúrate de haber configurado CORS correctamente
- Verifica que estés usando el origen correcto (`http://localhost:3000`)

### Los cambios no se ven en la app
- El contenido está en caché - recarga la página con `Ctrl+F5`
- Verifica que el post esté **publicado** (no en borrador)

### Studio no carga
- Verifica que las variables de entorno estén configuradas
- Revisa la consola del navegador para ver errores específicos

---

## 🔗 Recursos Útiles

- [Documentación oficial de Sanity](https://www.sanity.io/docs)
- [Sanity Dashboard](https://www.sanity.io/manage)
- [Portable Text Guide](https://www.sanity.io/guides/introduction-to-portable-text)
- [Schema Types Reference](https://www.sanity.io/docs/schema-types)

---

## ✅ Checklist de Configuración

- [ ] Cuenta de Sanity creada
- [ ] Proyecto de Sanity creado
- [ ] Project ID copiado
- [ ] Variables de entorno configuradas en `.env.local`
- [ ] CORS configurado para `localhost:3000`
- [ ] Studio accesible en `/studio`
- [ ] Autor creado
- [ ] Primer post publicado
- [ ] Post visible en `/blog`

¡Una vez completados todos estos pasos, tu CMS estará completamente configurado y listo para usar! 🎉
