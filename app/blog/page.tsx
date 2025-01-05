import { media } from "@wix/sdk";
import { getPosts } from "lib/wix";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";



type Props = {}

const page = async  (props: Props) => {
  const posts = await getPosts();
  const { getImageUrl } = media;
  
  // console.log(posts[0]?.media);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Suspense fallback={<div>Loading...</div>}>
        {posts.map((post: any) => {
          const myImage = getImageUrl(post?.media?.wixMedia?.image || '') 
          return (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <div className="border border-muted rounded-lg overflow-hidden transition-shadow hover:shadow-lg bg-card">
              <div className="relative h-48">
                <Image
                  src={myImage.url}
                  alt={post.title || 'Placeholder'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-foreground mb-2">{post.title}</h2>
                <p className="text-muted mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <Image
                    src={myImage.url || '/placeholder.svg'}
                    alt={'Noochxxo'}
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{'Noochxxo'}</p>
                    <p className="text-sm text-muted-foreground">
                      {/* {post?.firstPublishedDate?.getDate()} */}
                      {post?.firstPublishedDate ? new Date(post.firstPublishedDate).toLocaleDateString() : 'Unknown date'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )})}
        
        
        </Suspense>
      </div>
    </div>
  )
}

export default page