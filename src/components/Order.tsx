import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Zap, Globe, Mail, ChevronRight, Binary, Users, Cpu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Order() {
    // State to manage showing the form vs initial state
    const [showForm, setShowForm] = useState(false);

    // Placeholder handler for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted - hook up to Lambda here");
    };

    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900 px-6" id="Order">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: The "Anti-Subscription" Offer */}
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
                                { icon: Box, text: "Raspberry Pi 3B+ (Industrial Grade)" },
                                { icon: Zap, text: "Hard-Shell Protective Housing & Power" },
                                { icon: Globe, text: "Ethernet Cable (Plug and Play)" },
                                { icon: Cpu, text: "Pre-loaded HexOS" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 transition-all hover:translate-x-1">
                                    <item.icon className="w-5 h-5 text-blue-500" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: The Sign-up Card */}
                    <div className="relative group">
                        {/* The 'Glow' - makes the card feel 'charged' */}
                        <div className="absolute -inset-0.5 bg-blue-500/20 rounded-2xl blur group-hover:bg-blue-500/30 transition duration-1000"></div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">

                            {/* Status Indicator */}
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">Launch Soon</span>
                            </div>

                            <div className="relative z-10 text-center">
                                {/* Header */}
                                <div className="mt-4 mb-8">
                                    <h3 className="text-3xl font-bold text-white tracking-tight">
                                        {showForm ? "Early Access" : "Join the Movement"}
                                    </h3>
                                    <p className="text-slate-400 text-sm mt-2 font-mono">
                                        {showForm ? "Tell us how you'll use HexBox." : "First Production Run Launching Soon"}
                                    </p>
                                </div>

                                {!showForm ? (
                                    /* Initial State */
                                    <div className="space-y-6">
                                        <div className="flex justify-center -space-x-2">
                                            {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center font-mono text-xs text-slate-400">?</div>)}
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500/30 flex items-center justify-center font-mono text-xs text-blue-300">+</div>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            Be the first to secure a hand-assembled Founder's Edition unit.
                                        </p>
                                        <Button
                                            onClick={() => setShowForm(true)}
                                            className="w-full bg-blue-600 hover:bg-blue-500 h-14 text-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-95 gap-2"
                                        >
                                            <Mail className="w-5 h-5" />
                                            Join Waitlist
                                        </Button>
                                    </div>
                                ) : (
                                    /* Form State */
                                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                        <div className="space-y-2">
                                            <Label className="text-slate-300 flex items-center gap-2 text-sm">
                                                <Users className="w-4 h-4 text-blue-400" />
                                                What do you want to use Hexbox for?
                                            </Label>
                                            <Textarea
                                                placeholder="e.g. Local LLMs, personal cloud..."
                                                className="bg-slate-950 border-slate-700 text-white min-h-[80px]"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-slate-300 flex items-center gap-2 text-sm">
                                                <Binary className="w-4 h-4 text-blue-400" />
                                                Technical preference?
                                            </Label>
                                            <RadioGroup defaultValue="mix" className="grid grid-cols-3 gap-2">
                                                {[
                                                    { value: "cli", label: "Terminal", desc: "Full control" },
                                                    { value: "mix", label: "Both", desc: "Flexibility" },
                                                    { value: "gui", label: "Visual", desc: "Just works" },
                                                ].map(option => (
                                                    <div key={option.value}>
                                                        <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                                                        <Label
                                                            htmlFor={option.value}
                                                            className="flex flex-col items-center justify-between rounded-md border-2 border-slate-700 bg-slate-950 p-3 hover:bg-slate-800 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-500/10 text-center cursor-pointer transition-all"
                                                        >
                                                            <span className="text-xs font-mono font-bold text-white peer-data-[state=checked]:text-blue-300">{option.label}</span>
                                                            <span className="text-[10px] text-slate-500 mt-1">{option.desc}</span>
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-slate-300 flex items-center gap-2 text-sm">
                                                <Cpu className="w-4 h-4 text-blue-400" />
                                                Interested in beta hardware?
                                            </Label>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="bg-slate-950 border-slate-700 text-white"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-emerald-600 hover:bg-emerald-500 h-12 font-bold transition-all group gap-2"
                                        >
                                            Submit Request
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
