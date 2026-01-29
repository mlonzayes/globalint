import Link from 'next/link'
import { getAllPosts } from '@/lib/sanity-client'

// Revalidar cada 3600 segundos (1 hora) para cache agresivo
export const revalidate = 3600

export default async function BlogPage() {
    const posts = await getAllPosts()

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>

                {posts && posts.length > 0 ? (
                    <div className="grid gap-8">
                        {posts.map((post: any) => (
                            <article key={post._id} className="border border-gray-200 p-6">
                                <Link href={`/blog/${post.slug.current}`}>
                                    <h2 className="text-2xl font-bold mb-2 hover:underline">
                                        {post.title}
                                    </h2>
                                </Link>

                                {post.publishedAt && (
                                    <p className="text-sm text-gray-500 mb-3">
                                        {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </p>
                                )}

                                {post.excerpt && (
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                )}

                                {post.author && (
                                    <p className="text-sm text-gray-500">
                                        Por {post.author.name}
                                    </p>
                                )}

                                {post.categories && post.categories.length > 0 && (
                                    <div className="flex gap-2 mt-4">
                                        {post.categories.map((category: string, index: number) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 text-sm"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="border border-gray-200 p-8 text-center">
                        <p className="text-gray-600">
                            No hay posts publicados todavía.
                        </p>
                    </div>
                )}

                <div className="mt-8">
                    <Link href="/" className="text-blue-600 hover:underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}
