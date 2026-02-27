import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Zap, Globe, Mail, ChevronRight, Users, Cpu, Loader2, CheckCircle, AlertTriangle, Target } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Order() {
    const [showForm, setShowForm] = useState(false);

    // --- Form State ---
    const [additionalFeedback, setAdditionalFeedback] = useState("");
    const [primaryGoal, setPrimaryGoal] = useState("");
    const [email, setEmail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    // --- API Status State ---
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // --- Validation Logic ---
    useEffect(() => {
        // Simple email regex: checks for characters + @ + characters + . + characters
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);

        if (
            primaryGoal !== "" &&
            isValidEmail
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [additionalFeedback, primaryGoal, email]);

    // --- Submission Handler ---
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setStatus('loading');

        try {
            const response = await fetch(
                "https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        newsletter: "hexbox-waitlist",
                        metadata: {
                            "Anything else on your mind?": additionalFeedback,
                            "Primary goal?": primaryGoal
                        }
                    }),
                }
            );

            if (response.status === 200) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900 px-6" id="Order">
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

                    {/* Right Side: Interaction Card */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-blue-500/20 rounded-2xl blur group-hover:bg-blue-500/30 transition duration-1000"></div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-center">

                            {/* Status Indicator */}
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">Launch Soon</span>
                            </div>

                            <div className="relative z-10 text-center">

                                {/* UI State Management */}
                                {status === 'loading' && (
                                    <div className="flex flex-col items-center gap-4 text-slate-400">
                                        <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
                                        <p className="font-mono text-sm">Processing request...</p>
                                    </div>
                                )}

                                {status === 'success' && (
                                    <div className="flex flex-col items-center gap-4 text-emerald-400 animate-in fade-in">
                                        <CheckCircle className="w-16 h-16" />
                                        <h3 className="text-2xl font-bold text-white">Welcome aboard!</h3>
                                        <p className="text-slate-300 text-sm">You are on the list. We'll be in touch soon.</p>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="flex flex-col items-center gap-4 text-red-400 animate-in fade-in">
                                        <AlertTriangle className="w-16 h-16" />
                                        <h3 className="text-2xl font-bold text-white">Something went wrong</h3>
                                        <p className="text-slate-300 text-sm">Please refresh and try again.</p>
                                    </div>
                                )}

                                {/* Default / Form State */}
                                {(status === 'idle' || status === 'loading' || status === 'error') && (
                                    <>
                                        <div className="mt-4 mb-8">
                                            <h3 className="text-3xl font-bold text-white tracking-tight">
                                                {showForm ? "Early Access" : "Join the Movement"}
                                            </h3>
                                            <p className="text-slate-400 text-sm mt-2 font-mono">
                                                {showForm ? "Tell us how you'll use HexBox." : "First Production Run Launching Soon"}
                                            </p>
                                        </div>

                                        {!showForm ? (
                                            <div className="space-y-6">
                                                <div className="flex justify-center -space-x-2">
                                                    {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center font-mono text-xs text-slate-400">{i}</div>)}
                                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500/30 flex items-center justify-center font-mono text-xs text-blue-300">+</div>
                                                </div>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    Be the first to secure a hand-assembled Founder's Edition HexBox.
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
                                            <form onSubmit={handleSubmit} className="space-y-6 text-left">
                                                <div className="space-y-3">
                                                    <Label className="text-slate-300 flex items-center gap-2 text-sm">
                                                        <Target className="w-4 h-4 text-blue-400" />
                                                        Primary Goal?
                                                    </Label>
                                                    <RadioGroup
                                                        value={primaryGoal}
                                                        onValueChange={setPrimaryGoal}
                                                        className="grid grid-cols-1 gap-2"
                                                    >
                                                        {[
                                                            { value: "personal-cloud", label: "Personal Cloud", desc: "Sovereign data & privacy" },
                                                            { value: "local-ai", label: "Local AI", desc: "Running LLMs & agents" },
                                                            { value: "iot-hub", label: "IoT Hub", desc: "Home automation & hacking" },
                                                            { value: "curious", label: "Just Curious", desc: "Not sure yet" },
                                                        ].map(option => (
                                                            <div key={option.value}>
                                                                <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                                                                <Label
                                                                    htmlFor={option.value}
                                                                    className="flex flex-col rounded-md border-2 border-slate-700 bg-slate-950 p-4 hover:bg-slate-800 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-500/10 cursor-pointer transition-all"
                                                                >
                                                                    <span className="text-sm font-bold text-white peer-data-[state=checked]:text-blue-300">{option.label}</span>
                                                                    <span className="text-xs text-slate-500 mt-1">{option.desc}</span>
                                                                </Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label className="text-slate-300 flex items-center gap-2 text-sm">
                                                        <Users className="w-4 h-4 text-blue-400" />
                                                        Anything else on your mind?
                                                    </Label>
                                                    <Textarea
                                                        value={additionalFeedback}
                                                        onChange={(e) => setAdditionalFeedback(e.target.value)}
                                                        placeholder="e.g. Local LLMs, personal cloud..."
                                                        className="bg-slate-950 border-slate-700 text-white min-h-[80px]"
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label className="text-slate-300 flex items-center gap-2 text-sm">
                                                        <Cpu className="w-4 h-4 text-blue-400" />
                                                        Email Address
                                                    </Label>
                                                    <Input
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="your@email.com"
                                                        className="bg-slate-950 border-slate-700 text-white"
                                                    />
                                                </div>

                                                <Button
                                                    type="submit"
                                                    disabled={!isFormValid || status === 'loading'}
                                                    className="w-full bg-emerald-600 hover:bg-emerald-500 h-12 font-bold transition-all group gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {status === 'loading' ? "Submitting..." : "Submit Request"}
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </form>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
