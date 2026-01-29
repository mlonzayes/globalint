import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/sanity-client'
import { PortableText } from 'next-sanity'

type Props = {
    params: Promise<{ slug: string }>
}

// Revalidar cada 3600 segundos (1 hora) para cache agresivo
export const revalidate = 3600

export async function generateStaticParams() {
    const posts = await getAllPosts()

    return posts.map((post: any) => ({
        slug: post.slug.current,
    }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return (
            <div className="min-h-screen p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
                    <Link href="/blog" className="text-blue-600 hover:underline">
                        ← Volver al blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <article>
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                        {post.publishedAt && (
                            <p className="text-gray-500 mb-4">
                                Publicado el{' '}
                                {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        )}

                        {post.author && (
                            <div className="flex items-center gap-3 mb-6">
                                <p className="text-gray-600">Por {post.author.name}</p>
                            </div>
                        )}

                        {post.categories && post.categories.length > 0 && (
                            <div className="flex gap-2 mb-6">
                                {post.categories.map((category: string, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-sm"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {post.excerpt && (
                        <div className="text-xl text-gray-600 mb-8 pb-8 border-b border-gray-200">
                            {post.excerpt}
                        </div>
                    )}

                    <div className="prose max-w-none">
                        {post.body && <PortableText value={post.body} />}
                    </div>
                </article>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <Link href="/blog" className="text-blue-600 hover:underline">
                        ← Volver al blog
                    </Link>
                </div>
            </div>
        </div>
    )
}
