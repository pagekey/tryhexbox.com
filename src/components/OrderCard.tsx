import { Button } from "@/components/ui/button";
import { Mail, ChevronRight, Loader2, CheckCircle, AlertTriangle, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";

interface OrderCardProps {
    apiEndpoint: string;
    stripeCheckoutUrl: string;
}

export default function OrderCard({ apiEndpoint, stripeCheckoutUrl }: OrderCardProps) {
    const [email, setEmail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsFormValid(emailRegex.test(email));
    }, [email]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setStatus('loading');

        try {
            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    newsletter: "hexbox-waitlist",
                    metadata: {}
                }),
            });

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
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-blue-500/20 rounded-2xl blur group-hover:bg-blue-500/30 transition duration-1000"></div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-center">

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">Available Now</span>
                </div>

                <div className="relative z-10">
                    {/* UI State Management */}
                    {status === 'loading' && (
                        <div className="flex flex-col items-center gap-4 text-slate-400 text-center">
                            <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
                            <p className="font-mono text-sm">Processing request...</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="flex flex-col items-center gap-4 text-emerald-400 animate-in fade-in text-center">
                            <CheckCircle className="w-16 h-16" />
                            <h3 className="text-2xl font-bold text-white">Welcome aboard!</h3>
                            <p className="text-slate-300 text-sm">You are on the list. We'll be in touch soon.</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="flex flex-col items-center gap-4 text-red-400 animate-in fade-in text-center">
                            <AlertTriangle className="w-16 h-16" />
                            <h3 className="text-2xl font-bold text-white">Something went wrong</h3>
                            <p className="text-slate-300 text-sm">Please refresh and try again.</p>
                        </div>
                    )}

                    {/* Default / Form State */}
                    {(status === 'idle' || status === 'loading' || status === 'error') && (
                        <div className="flex flex-col gap-6">

                            {/* Purchase / Buy section */}
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-white tracking-tight mb-2">
                                    Secure Your HexBox
                                </h3>
                                <p className="text-slate-400 text-sm font-mono mb-4">
                                    First Production Run Shipping Immediately
                                </p>
                                <a
                                    href={stripeCheckoutUrl}
                                    target="_blank"             // Optional: Opens in a new tab
                                    rel="noopener noreferrer"   // Security best practice when using target="_blank"
                                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 h-14 text-lg font-bold rounded-md text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-95 gap-2"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Buy Founder's Edition
                                </a>
                            </div>

                            {/* Separator Line */}
                            <div className="relative flex py-2 items-center">
                                <div className="flex-grow border-t border-slate-800"></div>
                                <span className="flex-shrink mx-4 text-slate-500 text-xs font-mono uppercase tracking-wider">Or</span>
                                <div className="flex-grow border-t border-slate-800"></div>
                            </div>

                            {/* Email Waitlist Form */}
                            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                <div className="space-y-2">
                                    <Label htmlFor="email-input" className="text-slate-400 flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                                        <Mail className="w-4 h-4 text-blue-400" />
                                        Join Waitlist For Next Batch
                                    </Label>
                                    <div className="flex gap-2">
                                        <Input
                                            id="email-input"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="bg-slate-950 border-slate-700 text-white flex-1"
                                        />
                                        <Button
                                            type="submit"
                                            disabled={!isFormValid || status === 'loading'}
                                            className="bg-emerald-600 hover:bg-emerald-500 font-bold transition-all group gap-1 disabled:opacity-50 disabled:cursor-not-allowed px-4"
                                        >
                                            {status === 'loading' ? "..." : "Join"}
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
