import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingWaitlist() {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900 px-6">
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
                            {[
                                "2TB Industrial-grade SSD",
                                "Full HexOS (YAML-based) included",
                                "Cloud-to-Local Backup Engine",
                                "No data tracking, ever."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <Check className="w-5 h-5 text-emerald-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: The Waitlist Card */}
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px]" />

                        <div className="relative z-10 text-center">
                            <div className="text-4xl font-bold text-white mb-2">$149</div>
                            <p className="text-slate-500 text-sm mb-8 italic">
                                *Estimated MSRP for Founder's Edition
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-white font-medium">Join the 100 unit pilot program</h3>
                                <div className="flex flex-col gap-3">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-slate-950 border-slate-700 text-white h-12"
                                    />
                                    <Button className="w-full bg-blue-600 hover:bg-blue-500 h-12 text-md font-semibold">
                                        Get Early Access
                                    </Button>
                                </div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                                    Secure your spot • No payment required today
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}