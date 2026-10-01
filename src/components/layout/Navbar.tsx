"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E4E7EC]/90 shadow-sm transition-all">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0 h-[64px] sm:h-[72px] flex items-center justify-between gap-3">
        <Link href={pathname.startsWith("/preview") ? "/preview" : "/"} className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/brand/nexus-lift-logo-master.svg"
            alt="Nexus Lift"
            width={160}
            height={32}
            priority
            className="h-7 sm:h-9 w-auto object-contain"
          />
        </Link>

        {/* Dynamic Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center text-sm font-semibold text-[#344054]">
          {pathname === "/" || pathname.startsWith("/preview") ? (
            <>
              <Link href="#solutions" className="hover:text-[#43A7E8] transition-colors">Solutions</Link>
              <Link href="#products" className="hover:text-[#43A7E8] transition-colors">Products</Link>
              <Link href="#bundles" className="hover:text-[#43A7E8] transition-colors">Bundles</Link>
            </>
          ) : (
            <Link href="/preview#products" className="hover:text-[#43A7E8] transition-colors">Home & Products</Link>
          )}
          <Link href="/insights" className="hover:text-[#43A7E8] transition-colors">Insights</Link>
          <Link href="/growth-audit" className="hover:text-[#43A7E8] transition-colors flex items-center gap-1.5">
            <span className="bg-[#EAF6FF] text-[#1971A5] text-[10px] px-1.5 py-0.5 rounded font-black uppercase">Audit</span> Growth
          </Link>
          <Link href="/free-tools" className="hover:text-[#43A7E8] transition-colors flex items-center gap-1.5">
            <span className="bg-[#EAF6FF] text-[#1971A5] text-[10px] px-1.5 py-0.5 rounded font-black uppercase">Free</span> Tools
          </Link>
          <Link href="/about-us" className="hover:text-[#43A7E8] transition-colors">About Us</Link>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://wa.me/8801814716713"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 border border-[#D0D5DD] rounded-xl text-xs font-extrabold text-[#0B1733] hover:bg-[#F7FAFC] hover:border-[#98A2B3] transition-all"
          >
            💬 WhatsApp
          </a>
          <Link
            href={pathname.startsWith("/preview") ? "/preview#diagnose" : "#diagnose"}
            className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-[#0B1733] text-white rounded-xl text-xs sm:text-[13px] font-extrabold hover:-translate-y-[0.5px] hover:shadow-[0_8px_20px_rgba(11,23,51,0.2)] transition-all whitespace-nowrap"
          >
            <span className="hidden xs:inline sm:inline">Business </span>Diagnose →
          </Link>
        </div>
      </div>
    </nav>
  )
}
