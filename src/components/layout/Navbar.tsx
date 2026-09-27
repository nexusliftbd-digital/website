"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 glass-nav border-b border-[#E4E7EC]/80">
      <div className="max-w-[1160px] mx-auto px-4 md:px-0 h-[74px] flex items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/brand/nexus-lift-logo-master.svg" alt="Nexus Lift" width={180} height={36} className="h-9 w-auto" />
        </Link>

        {/* Dynamic Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center text-sm font-semibold text-[#344054]">
          {pathname === "/" ? (
            <>
              <Link href="#solutions" className="hover:text-[#43A7E8] transition-colors">Solutions</Link>
              <Link href="#products" className="hover:text-[#43A7E8] transition-colors">Products</Link>
            </>
          ) : (
            <Link href="/#products" className="hover:text-[#43A7E8] transition-colors">Home & Products</Link>
          )}
          <Link href="/free-tools" className="hover:text-[#43A7E8] transition-colors flex items-center gap-1.5">
            <span className="bg-[#EAF6FF] text-[#1971A5] text-[10px] px-1.5 py-0.5 rounded font-black uppercase">Free</span> Tools
          </Link>
          <Link href="/about-us" className="hover:text-[#43A7E8] transition-colors">About Us</Link>
          <Link href="/blog" className="hover:text-[#43A7E8] transition-colors">Insights</Link>
          <Link href="/dashboard" className="hidden xl:inline-block bg-[#EAF6FF] text-[#1971A5] px-3 py-1 rounded-md text-xs font-black uppercase hover:bg-[#1971A5] hover:text-white transition">CRM/CEO Console</Link>
        </div>

        <div className="flex items-center gap-2.5">
          <a href="https://wa.me/8801814716713" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-[#D0D5DD] rounded-xl text-[13px] font-extrabold text-[#0B1733] hover:bg-[#F7FAFC] hover:border-[#98A2B3] transition-all">
            💬 WhatsApp
          </a>
          <Link href={pathname === "/" ? "#diagnose" : "/#diagnose"} className="inline-flex items-center justify-center px-4 py-2 bg-[#0B1733] text-white rounded-xl text-[13px] font-extrabold hover:-translate-y-[1px] hover:shadow-[0_10px_25px_rgba(11,23,51,0.18)] transition-all">
            Business Diagnose &rarr;
          </Link>
        </div>
      </div>
    </nav>
  )
}
