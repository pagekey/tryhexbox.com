import { Badge } from "@/components/ui/badge";
import { Box, Zap, Globe, Cpu } from "lucide-react";
import OrderCard from "./OrderCard";


export default function Order() {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Offer */}
                    <div>
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 font-mono uppercase tracking-widest text-xs">
                            Limited Founder's Edition
                        </Badge>
                        <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">
                            One-time cost. <br />
                            Lifetime sovereignty.
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            No monthly fees. No "Pro" tiers. Just high-grade hardware running
                            open, observable code.
                        </p>

                        <ul className="space-y-4">
                            {[
                                { icon: Box, text: "High-quality Compute Hardware" },
                                { icon: Zap, text: "Hard-Shell Protective Housing & Power" },
                                { icon: Globe, text: "Ethernet Cable (Plug and Play)" },
                                { icon: Cpu, text: "Pre-loaded with Hex Orchestrator" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 transition-all hover:translate-x-1">
                                    <item.icon className="w-5 h-5 text-blue-500" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Reusable Interaction Card */}
                    <div id="Order">
                        <OrderCard
                            apiEndpoint="https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler"
                            stripeCheckoutUrl="https://buy.stripe.com/fZu8wQ6yu7BYckP8pDgEg08"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
