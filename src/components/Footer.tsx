import { Hexagon, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Hexagon className="w-6 h-6 text-blue-500 fill-blue-500/20" />
                            <span className="text-xl font-bold text-white tracking-tight">HexBox</span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6">
                            The self-hosting appliance for the modern era.
                            No subscriptions, no black boxes, just your data in your home.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-500 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">YAML Specs</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Hardware Info</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">OSS License</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Our Manifesto</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Brand Polish */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        Copyright &copy; 2026 <a className="underline" href="https://pagekey.io">PageKey Solutions, LLC</a>. All rights reserved.
                    </p>

                    {/* The "Pulse" - Real-time Brand Polish */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-medium text-emerald-500 uppercase tracking-widest">
                            Network Sovereign
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}