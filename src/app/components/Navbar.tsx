// src/components/Navbar.js

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-8 bg-slate-500 flex justify-center gap-8">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/article">Articles</Link>
    </nav>
  );
}
