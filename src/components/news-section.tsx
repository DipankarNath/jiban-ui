import { ArrowRight } from "@phosphor-icons/react"

import { SectionEyebrow } from "@/components/section-eyebrow"
import { Button } from "@/components/ui/button"

// Sample posts from the mockup. Images are low-res crops — replace with real ones.
const posts = [
  {
    category: "Business",
    title: "How Digital Solutions Can Grow Your Business",
    date: "May 10, 2025",
    image: "/images/news-digital.jpg",
  },
  {
    category: "Products",
    title: "The Power of Indian Spices in Everyday Life",
    date: "Apr 28, 2025",
    image: "/images/news-spices.jpg",
  },
  {
    category: "Trade",
    title: "Opportunities for Importing Japanese Used Cars",
    date: "Apr 15, 2025",
    image: "/images/news-cars.jpg",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col items-start">
          <SectionEyebrow align="left">Latest Updates</SectionEyebrow>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl">
            News &amp; Insights
          </h2>
          <p className="mt-3 max-w-sm text-muted-foreground">
            Stay informed with the latest updates, business opportunities,
            product launches and useful tips.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-6 h-11 border-gold px-6 text-navy hover:bg-gold-soft"
          >
            View All
            <ArrowRight data-icon="inline-end" className="text-gold" />
          </Button>
        </div>

        <ul className="grid gap-5 sm:grid-cols-3">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm transition hover:shadow-md">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[0.65rem] font-semibold tracking-wider text-gold uppercase">
                    {post.category}
                  </p>
                  <h3 className="mt-1.5 text-sm leading-snug font-semibold text-navy">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
                    <time>{post.date}</time>
                    <ArrowRight className="size-4 text-gold transition group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
