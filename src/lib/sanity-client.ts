import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'



export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  // useCdn: true usa el CDN de Sanity para cachear queries y reducir uso de recursos
  // Combinado con ISR (revalidate) de Next.js, minimizamos requests a la API
  useCdn: true,
})


// Helper para construir URLs de imágenes
const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source)
}


// Funciones helper para queries comunes
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
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
  `)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        slug,
        image,
        bio
      },
      categories
    }
  `,
    { slug }
  )
}

export async function getPageBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      seo
    }
  `,
    { slug }
  )
}
