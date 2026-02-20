import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Hexagon, Package, Youtube, Zap } from "lucide-react";

export default function Success() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12 overflow-hidden relative">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />

            <div className="max-w-2xl w-full relative z-10 text-center space-y-8">
                {/* Brand Logo */}
                <div className="flex justify-center mb-10">
                    <Hexagon className="w-12 h-12 text-blue-500 fill-blue-500/20" />
                </div>

                <div className="space-y-4">
                    <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/5 px-4 py-1">
                        Transaction Confirmed
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
                        Welcome to the <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Sovereign Class.
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
                        You've claimed one of the 10 Founder's Edition units.
                        Your digital sanctuary is being prepared.
                    </p>
                </div>

                {/* What Happens Next Card */}
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl text-left space-y-6 shadow-2xl">
                    <h3 className="text-white font-bold flex items-center gap-2">
                        <Package className="w-5 h-5 text-blue-400" /> Next Steps
                    </h3>

                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="bg-emerald-500/10 p-2 rounded-lg h-fit">
                                <Check className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Payment Received</p>
                                <p className="text-slate-500 text-sm">Stripe is sending a receipt to your email right now. Keep that for your records.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-blue-500/10 p-2 rounded-lg h-fit">
                                <Zap className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Batch 01 Provisioning</p>
                                <p className="text-slate-500 text-sm">We've been notified of your order. We'll reach out personally to your email when your unit is being assembled and prepped for shipping.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-blue-500/10 p-2 rounded-lg h-fit">
                                <Youtube className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Open Source Progress</p>
                                <p className="text-slate-500 text-sm">In the meantime, follow the <a className="underline" href="https://youtube.com/@PageKey">PageKey YouTube</a> to watch the HexOS firmware evolve in real-time.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Add Share on X Section below the 'What's Next' card */}
                <div className="pt-8 border-t border-slate-900/50 space-y-4">
                    <p className="text-slate-500 text-sm italic">
                        "One of the 10. I'm done feeding the machine."
                    </p>

                    <Button
                        asChild
                        variant="outline"
                        className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all"
                    >
                        <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                "I just claimed 1 of the 10 Founder's Edition HexBoxes. Taking back my tech from the cloud. 🛡️💻\n\nCheck it out at hexbox.pagekey.io"
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            {/* Simple X Logo representation */}
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            Broadcast Your Sovereignty
                        </a>
                    </Button>
                </div>

                <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.2em]">
                    Batch 01 Deployment: Spring 2026
                </p>
            </div>
        </div>
    );
}
