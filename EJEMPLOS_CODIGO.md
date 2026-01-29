# 📚 Ejemplos de Código para Extender el Proyecto

Esta guía contiene ejemplos de código para agregar funcionalidades adicionales a tu proyecto.

---

## 1. Agregar un Nuevo Schema (Categorías)

### `schemas/category.ts`

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
```

### Actualizar `schemas/index.ts`

```typescript
import author from './author'
import post from './post'
import page from './page'
import category from './category' // Nuevo

export const schemaTypes = [author, post, page, category]
```

---

## 2. Componente de Tarjeta de Blog

### `src/components/BlogCard.tsx`

```typescript
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity-client'

interface BlogCardProps {
  title: string
  slug: string
  excerpt?: string
  mainImage?: any
  publishedAt?: string
  author?: {
    name: string
  }
  categories?: string[]
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author,
  categories,
}: BlogCardProps) {
  return (
    <article className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {mainImage && (
        <Link href={`/blog/${slug}`}>
          <div className="relative w-full h-48">
            <Image
              src={urlForImage(mainImage).width(600).height(400).url()}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      )}
      
      <div className="p-6">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-2xl font-bold mb-2 hover:underline">
            {title}
          </h2>
        </Link>
        
        {publishedAt && (
          <p className="text-sm text-gray-500 mb-3">
            {new Date(publishedAt).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
        
        {excerpt && (
          <p className="text-gray-600 mb-4">{excerpt}</p>
        )}
        
        {author && (
          <p className="text-sm text-gray-500 mb-4">
            Por {author.name}
          </p>
        )}
        
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-sm rounded"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
```

### Usar el componente en `/blog`

```typescript
// src/app/blog/page.tsx
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/sanity-client'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post: any) => (
            <BlogCard
              key={post._id}
              title={post.title}
              slug={post.slug.current}
              excerpt={post.excerpt}
              mainImage={post.mainImage}
              publishedAt={post.publishedAt}
              author={post.author}
              categories={post.categories}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
```

---

## 3. Componente de Renderizado de Portable Text

### `src/components/PortableTextRenderer.tsx`

```typescript
import { PortableText, PortableTextComponents } from 'next-sanity'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity-client'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlForImage(value).width(800).url()}
            alt={value.alt || ' '}
            width={800}
            height={600}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
}

interface PortableTextRendererProps {
  value: any
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  return <PortableText value={value} components={components} />
}
```

### Usar en el post

```typescript
// src/app/blog/[slug]/page.tsx
import PortableTextRenderer from '@/components/PortableTextRenderer'

// ... en el componente
<div className="prose max-w-none">
  {post.body && <PortableTextRenderer value={post.body} />}
</div>
```

---

## 4. Búsqueda de Posts

### `src/lib/sanity-client.ts` - Agregar función

```typescript
export async function searchPosts(query: string) {
  return client.fetch(
    `
    *[_type == "post" && (
      title match $query ||
      excerpt match $query ||
      pt::text(body) match $query
    )] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{
        name,
        slug,
        image
      },
      categories
    }
  `,
    { query: `*${query}*` }
  )
}
```

### Componente de búsqueda

```typescript
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Buscar posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
```

---

## 5. Paginación

### `src/lib/sanity-client.ts` - Agregar función

```typescript
export async function getPostsPaginated(page: number = 1, pageSize: number = 9) {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  const posts = await client.fetch(
    `
    *[_type == "post"] | order(publishedAt desc) [$start...$end] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{
        name,
        slug,
        image
      },
      categories
    }
  `,
    { start, end }
  )

  const total = await client.fetch(`count(*[_type == "post"])`)

  return {
    posts,
    total,
    hasMore: end < total,
    page,
    pageSize,
  }
}
```

---

## 6. Metadata Dinámica para SEO

### En post individual

```typescript
// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/sanity-client'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || 'Lee este post en nuestro blog',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name].filter(Boolean),
    },
  }
}
```

---

## 7. Newsletter Subscription

### Componente

```typescript
'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Aquí integrarías con tu servicio de email
      // Por ejemplo: Mailchimp, ConvertKit, etc.
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Suscríbete al Newsletter</h3>
      <p className="text-gray-600 mb-4">
        Recibe las últimas actualizaciones directamente en tu email
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribirse'}
        </button>
      </form>
      
      {status === 'success' && (
        <p className="text-green-600 mt-2">¡Suscripción exitosa!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Error al suscribirse. Intenta de nuevo.</p>
      )}
    </div>
  )
}
```

---

## 8. Related Posts

### Función en `sanity-client.ts`

```typescript
export async function getRelatedPosts(currentPostId: string, categories: string[] = [], limit: number = 3) {
  return client.fetch(
    `
    *[_type == "post" && _id != $currentPostId && count((categories[])[@ in $categories]) > 0] 
    | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }
  `,
    { currentPostId, categories, limit }
  )
}
```

---

## 🎯 Tips Adicionales

### TypeScript Types

Crea tipos para tus datos de Sanity:

```typescript
// src/types/sanity.ts
export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  mainImage?: any
  publishedAt?: string
  author?: Author
  categories?: string[]
  body?: any[]
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: any
  bio?: any[]
}
```

### Revalidación de Datos

Para contenido dinámico que cambia con frecuencia:

```typescript
// En cualquier page.tsx
export const revalidate = 60 // Revalidar cada 60 segundos
```

---

¡Usa estos ejemplos como punto de partida para extender tu proyecto! 🚀
