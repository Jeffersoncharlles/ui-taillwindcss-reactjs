"use client"

import Link from "next/link"
import {usePathname } from 'next/navigation'

interface NavLinkProps{
  children: string
  href:string
}

export const NavLink = ({ children, href }: NavLinkProps) => {
    const path = usePathname()

  return (
    <Link
      data-active={path === href}
      className="px-4 py-1.5 border-l border-white/5 text-slate-400 hover:text-white transition-colors data-[active=true]:border-cyan-400"
      href={href}
    >
      {children}
    </Link>
  )
}
