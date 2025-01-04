import { getPosts } from "@/lib/wix";

type Props = {}

const page = async  (props: Props) => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {/* <Suspense fallback={<div>Loading...</div>}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <div className="border border-muted rounded-lg overflow-hidden transition-shadow hover:shadow-lg bg-card">
              <div className="relative h-48">
                <Image
                  src={post.frontmatter.coverImage || '/placeholder.svg'}
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-foreground mb-2">{post.frontmatter.title}</h2>
                <p className="text-muted-foreground mb-4">{post.frontmatter.excerpt}</p>
                <div className="flex items-center">
                  <Image
                    src={post.frontmatter.author.picture || '/placeholder.svg'}
                    alt={post.frontmatter.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{post.frontmatter.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(post.frontmatter.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
        
        </Suspense> */}
      </div>
    </div>
  )
}

export default page