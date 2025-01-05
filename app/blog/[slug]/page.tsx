// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import { MDXRemote } from 'next-mdx-remote/rsc'
// import { MDXComponents } from 'mdx/types'

import { getPost } from "@/lib/wix";


type Params = Promise<{ slug: string }> 

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params; 
  const post = (await getPost(slug));
  // console.log(post);

  
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-invert prose-lg mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-4">{post?.title}</h1>
        <div className="flex items-center mb-8">
          {/* <Image
            src={frontmatter.author.picture || '/placeholder.svg'}
            alt={frontmatter.author.name}
            width={40}
            height={40}
            className="rounded-full mr-2"
          /> */}
          <div>
            <p className="text-sm font-medium text-foreground">{'Noochxxo'}</p>
            <p className="text-sm text-muted-foreground">
              {post?.firstPublishedDate ? new Date(post?.firstPublishedDate).toLocaleDateString() : 'Unknown date'}
            </p>
          </div>
        </div>
        <div className="relative h-64 mb-8">
          {/* <Image
            src={frontmatter.coverImage || '/placeholder.svg'}
            alt={frontmatter.title}
            fill
            className="object-cover rounded-lg"
          /> */}
        </div>
      </article>
    </div>
  )
}

