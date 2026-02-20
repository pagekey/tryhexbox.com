import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Check, Globe, ShieldCheck, Zap } from "lucide-react";

export default function Order() {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900 px-6" id="Order">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: The "Anti-Subscription" Offer */}
                    <div>
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4">
                            Limited Founder's Edition
                        </Badge>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            One-time cost. <br />
                            Lifetime sovereignty.
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            No monthly fees. No "Pro" tiers. Just high-grade hardware running
                            open, observable code.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-300 transition-all hover:translate-x-1">
                                <Box className="w-5 h-5 text-blue-500" />
                                <span>Raspberry Pi 3B+ <span className="text-slate-500 text-sm">(Industrial Grade)</span></span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 transition-all hover:translate-x-1">
                                <Zap className="w-5 h-5 text-blue-500" />
                                <span>Hard-Shell Protective Housing &amp; Power</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 transition-all hover:translate-x-1">
                                <Globe className="w-5 h-5 text-blue-500" />
                                <span>Ethernet Cable <span className="text-slate-500 text-sm">(Plug and Play)</span></span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 transition-all hover:translate-x-1">
                                <Check className="w-5 h-5 text-emerald-500" />
                                <span className="font-semibold text-white">Pre-loaded HexOS</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side: The Order Card */}
                    <div className="relative group">
                        {/* The 'Glow' - makes the card feel 'charged' */}
                        <div className="absolute -inset-0.5 bg-blue-500/20 rounded-2xl blur group-hover:bg-blue-500/30 transition duration-1000"></div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">

                            {/* Live Status Indicator */}
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-bold text-shadow-glow">In Stock</span>
                            </div>

                            <div className="relative z-10 text-center">
                                {/* Pricing Header */}
                                <div className="mt-4">
                                    <div className="text-5xl font-bold text-white mb-1 tracking-tight">$149</div>
                                    <p className="text-slate-500 text-xs font-mono uppercase tracking-tighter">
                                        Founder's Edition • Batch 01
                                    </p>
                                </div>

                                <div className="my-8 space-y-6">
                                    {/* Scarcity Bar */}
                                    <div className="space-y-2 text-left">
                                        <div className="flex justify-between text-xs font-mono">
                                            <span className="text-slate-400 font-medium">Inventory Remaining</span>
                                            <span className="text-blue-400 font-bold tracking-widest">10 / 10 Units</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        </div>
                                    </div>

                                    {/* Action Area */}
                                    <div className="space-y-3">
                                        <Button
                                            asChild
                                            className="w-full bg-blue-600 hover:bg-blue-500 h-14 text-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-95 group/btn"
                                        >
                                            <a href="https://buy.stripe.com/8x24gAf508G23Oj8pDgEg07">
                                                Claim Yours Now
                                                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                                            </a>
                                        </Button>

                                        <div className="flex items-center justify-center gap-2 text-slate-500">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500/80" />
                                            <span className="text-[11px] font-medium uppercase tracking-widest">Secure Checkout via Stripe</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-slate-800/50">
                                        <p className="text-[10px] text-slate-500 leading-relaxed italic">
                                            This is a hand-assembled run of 10 units for early adopters. <br />
                                            Once they're gone, Batch 02 enters production.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}