import { ArrowRight, Video, CheckCircle2, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

export default function PhotosPage() {
    // const youtubeVideoId = "dQw4w9WgXcQ";
    const stripeCheckoutUrl = "https://buy.stripe.com/fZu8wQ6yu7BYckP8pDgEg08";

    return (
        <Layout>
            {/* Added deep slate background to match the main Hero aesthetic */}
            <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">

                {/* Background Ambient Glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 space-y-24">

                    {/* Hero Section */}
                    <section className="text-center max-w-3xl mx-auto space-y-6">
                        <Badge
                            variant="outline"
                            className="bg-blue-500/5 text-blue-400 border-blue-500/30 px-3 py-1 text-sm font-medium tracking-wide"
                        >
                            <Sparkles className="mr-1.5 h-3.5 w-3.5 inline text-blue-400" />
                            Ultra-Limited Run: Only 1 Unit Available
                        </Badge>

                        <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl leading-[1.1] text-white">
                            Your Photos. <br />
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                                Zero Cloud Fees.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Immich is the ultimate self-hosted Google Photos alternative. Learn how to build your own, or skip the configuration headache and buy our exclusive, pre-built plug-and-play flagship hardware.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8" asChild>
                                <a href="#buy-now">
                                    Secure the Only Unit
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-white border-slate-700 bg-slate-900/50 hover:bg-slate-800"
                                asChild
                            >
                                <a href="#tutorial">
                                    <Video className="mr-2 h-4 w-4 text-emerald-400" />
                                    Watch Build Guide
                                </a>
                            </Button>
                        </div>
                    </section>

                    {/* Video Tutorial Section (The "Do It Yourself" Path) */}
                    <section id="tutorial" className="space-y-6 scroll-mt-20">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight text-white">The DIY Guide</h2>
                            <p className="text-slate-400">
                                We believe in open, understandable tech. Here is the exact blueprint to install Immich on your own server or laptop for free.
                            </p>
                        </div>

                        <div className="text-center text-slate-500 py-12 border border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
                            Video coming soon.
                        </div>
                    </section>

                    {/* The Pivot / "Do It For Me" Pitch */}
                    <section id="buy-now" className="scroll-mt-20">
                        <div className="grid gap-12 md:grid-cols-5 items-center">

                            {/* Value Prop Columns */}
                            <div className="md:col-span-3 space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                                    Don't want the hassle? <br />
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Meet HexBox Photos.
                                    </span>
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Setting up Docker, configuring reverse proxies, managing persistent storage, and tuning hardware acceleration can take hours of trial and error.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    We've done all the heavy lifting. This is a pristine, premium hardware build, meticulously optimized for rapid photo indexing and facial recognition, shipped straight to your door.
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                                    {[
                                        "Pre-installed Immich production build",
                                        "Plug & Play local network setup",
                                        "Local-first data privacy",
                                        "No monthly subscription cloud traps",
                                        "Hand-assembled single unit batch",
                                        "Local, private machine learning",
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium text-slate-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing / Stripe Conversion Card */}
                            <div className="md:col-span-2">
                                <Card className="relative border border-blue-500/30 shadow-2xl bg-slate-900/40 backdrop-blur-md text-slate-100">
                                    {/* Subtle gradient flash overlay behind the card */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />

                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-blue-600 text-white text-[10px] font-mono tracking-widest uppercase rounded-full border border-blue-400/30">
                                        Batch #01
                                    </div>

                                    <CardHeader className="text-center pb-4 pt-8">
                                        <CardTitle className="text-2xl font-bold text-white">HexBox Photos Ed. 1</CardTitle>
                                        <CardDescription className="text-slate-400">Complete hardware setup</CardDescription>
                                        <div className="mt-4 flex items-baseline justify-center gap-1">
                                            <span className="text-5xl font-extrabold tracking-tight text-white">$349</span>
                                            <span className="text-sm font-semibold text-blue-400 font-mono">USD</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-block">
                                                Free US Shipping
                                            </span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <hr className="border-slate-800" />

                                        <div className="rounded-xl bg-blue-950/40 p-3.5 border border-blue-500/20 flex gap-3 items-start text-xs text-slate-300">
                                            <ShieldAlert className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-blue-300">Strict Availability</p>
                                                <p className="mt-0.5 text-slate-400 leading-normal">There is literally only 1 unit of this configuration sitting on my desk. When clicked, checkout will lock.</p>
                                            </div>
                                        </div>

                                        <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold transition-all group shadow-lg shadow-blue-600/20" asChild>
                                            <a href={stripeCheckoutUrl}>
                                                Buy Now via Stripe
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </Button>

                                        <p className="text-center text-[11px] text-slate-500">
                                            Secure transaction processed by Stripe.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    {/* Quick Micro-FAQ for Skeptical Buyers */}
                    <section className="border-t border-slate-900 pt-16 max-w-3xl mx-auto space-y-8">
                        <h3 className="text-2xl font-bold tracking-tight text-center text-white">Frequently Asked Questions</h3>
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-base flex items-center gap-2 text-slate-200">
                                    <HelpCircle className="h-4 w-4 text-blue-400 shrink-0" /> What hardware is it?
                                </h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    It runs on a low-power, high-efficiency mini-PC node equipped with high-speed local flash storage for immediate, snappy lookups and accelerated background face tagging.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-base flex items-center gap-2 text-slate-200">
                                    <HelpCircle className="h-4 w-4 text-blue-400 shrink-0" /> Can I expand storage?
                                </h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Absolutely. It features high-speed expansion ports, allowing you to easily map external solid-state drives or network-attached shares (NAS) right via the built-in web UI.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
