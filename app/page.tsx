import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        wilpur.me documentation
      </h1>
      <p className="mb-4">
        {`Writing things down while working on something reinforces your knowledge of that thing. 
        It also creates a document of reference for you and others.`}
      </p>
      <p className="mb-4 italic">
        {`By writing and posting stuff we deepen our knowledge of things
        and help others.`}
      </p>
      <p className="mb-4">
        {`I've been saved countless times by tutorials and how-tos on the internet related to coding
        or hobbies such as cooking, fixing bicycles, music -- really any subject imaginable.`}
      </p>
      <p className="mb-4 italic">
        {`By writing and posting stuff we contribute to the breadth of accessible
        human knowledge.`}
      </p>
      <p className="mb-4">
        {`This blog won't be limited to educational material, though.`}
      </p>
      <p className="mb-4 italic">
        {`By writing and posting stuff we have fun.`}
      </p>
      <p className="mb-4">
        {`Join me on my coding and math journey, exploring other topics along the way.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
