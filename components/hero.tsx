import Button from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

type Props = {}

const hero = (props: Props) => {
  return (
    <section className="relative h-[calc(100vh-4rem)] bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg"
            alt="Featured Shoe"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Step into Style
            </h1>
            <p className="mt-3 text-xl text-white">
              Discover the perfect pair for every occasion.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/categories">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default hero