import { ArrowRight, Video, CheckCircle2, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import OrderCard from "@/components/OrderCard"; // Adjusted path assuming it is in components folder

export default function PhotosPage() {
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

                        {/* Responsive Video Wrapper */}
                        <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/20 shadow-2xl">
                            <iframe
                                className="w-full aspect-video"
                                src="https://www.youtube.com/embed/0DyBc2b1KzY"
                                title="Immich DIY Setup Guide"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
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

                            {/* Pricing / Reusable Order Card Component */}
                            <div className="md:col-span-2">
                                <OrderCard
                                    apiEndpoint="https://zu0rim0p04.execute-api.us-east-1.amazonaws.com/default/email-signup-handler"
                                    stripeCheckoutUrl="https://buy.stripe.com/fZu8wQ6yu7BYckP8pDgEg08"
                                />
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
                                    Absolutely. It features high-speed expansion ports, allowing you to easily map external solid-state drives or network-attached shares (NAS).
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
