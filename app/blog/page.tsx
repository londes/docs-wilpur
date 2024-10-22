import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'wilpur.me docs',
  description: 'wilpur.me dev blog',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">wilpur.me dev blog</h1>
      <BlogPosts />
    </section>
  )
}
