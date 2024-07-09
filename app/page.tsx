import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Wilpur.me Blog
      </h1>
      <p className="mb-4">
        {`It's a well known fact that writing things down while working on them reinforces
        your knowledge of whatever the thing is. This also creates a document of reference
        for you and others. By writing and posting stuff we deepen our knowledge of things
        and help others.`}
      </p>
      <p className="mb-4">
        {`I've also been saved countless times by posts on the internet related to coding,
        or hobbies such as cooking, bicycle maintenance, music -- really any subject 
        imaginable. By writing and posting stuff we contribute to the breadth of accessible
        human knowledge.`}
      </p>
      <p className="mb-4">
        {`This blog won't be limited to educational material though. By writing and posting
        we have fun.`}
      </p>
      <p className="mb-4">
        {`Join me on my coding and mathematics journey, and exploring other topics along the way.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
