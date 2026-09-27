"use client";

import Navbar from "@/components/layout/Navbar";
import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import Link from "next/link";
import { products } from "@/data/products";

export default function BlogPostDetails() {
  const { slug } = useParams();
  const router = useRouter();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-black text-[#0B1733] mb-4">Content Not Found</h1>
        <button onClick={() => router.push('/blog')} className="text-[#1971A5] font-bold">← Back to Blog</button>
      </div>
    );
  }

  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.banglaTitle,
    "alternativeHeadline": post.title,
    "description": post.excerpt,
    "inLanguage": "bn-BD",
    "author": {
      "@type": "Organization",
      "name": "Nexus Lift Research Team",
      "url": "https://nexuslift.info"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexus Lift",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexuslift.info/assets/brand/nexus-lift-og-card.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nexuslift.info/blog/${post.slug}`
    }
  } : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <Navbar />
      <main className="flex-1 bg-[#F8FAFC]">
        {/* Post Hero */}
        <section className={`py-16 md:py-24 bg-gradient-to-br ${post.coverColor} text-white`}>
          <div className="max-w-[760px] mx-auto px-4 md:px-0">
            <Link href="/blog" className="text-xs font-bold text-white/70 hover:text-white mb-6 inline-block">
              ← Back to Insights Vault
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-[12px] font-bold text-white/80">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              {post.banglaTitle}
            </h1>
            <p className="text-sm text-white/90 font-bold border-l-4 border-[#43A7E8] pl-4">{post.title}</p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16">
          <div className="max-w-[760px] mx-auto px-4 md:px-0">
            <article className="prose prose-sm md:prose-base prose-slate max-w-none prose-headings:font-black prose-headings:text-[#0B1733] prose-a:text-[#1971A5] prose-strong:text-[#0B1733]">

              <div className="text-lg font-bold text-[#475467] leading-relaxed mb-8">
                {post.content.intro}
              </div>

              <h2 className="text-2xl mt-8 mb-4">The Real Problem</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-8">
                <p className="text-[#991B1B] m-0 font-medium leading-relaxed">{post.content.problem}</p>
              </div>

              <h2 className="text-2xl mt-8 mb-4">{post.content.framework.title}</h2>
              <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm mb-8">
                <ul className="space-y-3 m-0 list-none p-0">
                  {post.content.framework.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="bg-[#EAF6FF] text-[#1971A5] font-black text-xs w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-[#334155] leading-relaxed text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl mt-8 mb-4">The Nexus System Delivery</h2>
              <p>{post.content.nexusSolution}</p>

              <h3 className="text-lg mt-8 mb-4">Key Takeaways:</h3>
              <ul>
                {post.content.keyTakeaways.map((point, i) => (
                  <li key={i} className="text-[#475467]">{point}</li>
                ))}
              </ul>

            </article>

            {/* Recommendation Widget for SEO Cross-linking */}
            <div className="mt-16 pt-10 border-t border-[#E2E8F0]">
              <h3 className="text-lg font-black text-[#0B1733] mb-6">Explore the Connected Tools to Fix This:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {post.relatedProducts.map(pId => {
                  const p = products.find(prod => prod.id === pId);
                  if (!p) return null;
                  return (
                    <div key={pId} className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm flex items-start gap-4">
                      <div className="shrink-0">
                        <span className="bg-gray-100 text-[#0B1733] text-[10px] font-black px-2 py-1 rounded-full uppercase block text-center mb-1">{p.badge}</span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#0B1733] text-sm mb-1">{p.title}</h4>
                        <p className="text-xs text-[#64748B] line-clamp-2 mb-2">{p.desc}</p>
                        <Link href="/#products" className="text-xs font-bold text-[#1971A5] hover:underline">View in Catalog &rarr;</Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-[#071127] text-[#aebbd0] py-10 text-xs border-t border-white/10 text-center">
        © 2026 Nexus Lift. All rights reserved. Connecting Sources, Lifting Business.
      </footer>
    </>
  );
}
