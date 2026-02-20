import { Hexagon, Github, Mail, Youtube } from "lucide-react";

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
                            <span className="text-slate-500 text-sm font-medium ml-1">by <a href="https://pagekey.io">PageKey</a></span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6">
                            The self-hosting appliance for the modern era.
                            No subscriptions, no black boxes, just your data in your home.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/pagekey" className="text-slate-500 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com/@PageKey" className="text-slate-500 hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="mailto:hello@pagekey.io" className="text-slate-500 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-[11px] uppercase tracking-[0.2em] opacity-50">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-between group">
                                <span className="text-slate-500 italic">Documentation</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800 text-slate-700 uppercase tracking-widest">Soon</span>
                            </li>
                            <li className="flex items-center justify-between group">
                                <span className="text-slate-500 italic">YAML Specs</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800 text-slate-700 uppercase tracking-widest">Soon</span>
                            </li>
                            <li className="flex items-center justify-between group">
                                <span className="text-slate-500 italic">Hardware Info</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800 text-slate-700 uppercase tracking-widest">Soon</span>
                            </li>
                            <li className="flex items-center justify-between group">
                                <span className="text-slate-500 italic">OSS License</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800 text-slate-700 uppercase tracking-widest">Soon</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-[11px] uppercase tracking-[0.2em] opacity-50">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-between group">
                                <span className="text-slate-500 italic">Our Mission</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800 text-slate-700 uppercase tracking-widest">Soon</span>
                            </li>
                            <li className="flex items-center justify-between group">
                                <span className="text-slate-500 italic">Privacy Policy</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800 text-slate-700 uppercase tracking-widest">Soon</span>
                            </li>
                            <li className="flex items-center justify-between group">
                                <span className="text-slate-500 italic">Terms of Service</span>
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800 text-slate-700 uppercase tracking-widest">Soon</span>
                            </li>
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