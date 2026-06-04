// components/Layout.tsx
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Layout({ children }: any) {
    return (
        <div className="min-h-screen bg-slate-950 text-white antialiased flex flex-col selection:bg-blue-500/20 selection:text-blue-400">
            {/* Global Sticky Navigation Header */}
            <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    {/* Brand / Logo Link back to home */}
                    <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tighter hover:opacity-90 transition-opacity">
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            HexBox
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link to="/" className="text-slate-400 transition-colors hover:text-white">
                            Platform
                        </Link>
                        <Link to="/photos" className="text-slate-400 transition-colors hover:text-white">
                            Photos Edition
                        </Link>
                        <a
                            href="https://www.youtube.com/playlist?list=PL3Kz_hCNpKST8ON430ggXjmJsKQ3WiqRK"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 transition-colors hover:text-white"
                        >
                            Devlogs
                        </a>
                    </nav>
                </div>
            </header>

            {/* Core Application Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Global Shared Footer */}
            <Footer />
        </div>
    );
}
