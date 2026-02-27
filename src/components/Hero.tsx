import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react"; // Import for the "click me" hint
import FloatingHexBox from "./FloatingHexBox";

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6 py-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Text Content */}
                <div className="text-left space-y-6">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/5">
                        Batch 01 - Shipping Spring 2026
                    </Badge>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1]">
                        Take back <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                            your tech.
                        </span>
                    </h1>

                    <div className="max-w-[500px] space-y-6">
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                            The self-hosting appliance that turns "the cloud" into <span className="text-white">your private vault</span>.
                            Fully observable, unit-testable, and billionaire-free.
                        </p>

                        {/* Clean, horizontal manifest line */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-widest text-blue-500/60 uppercase">
                            <span className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-500 rounded-full" /> No Subscriptions
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-500 rounded-full" /> No Tracking
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-500 rounded-full" /> Local First
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#Order">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 px-8">
                                Join Waitlist
                            </Button>
                        </a>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => setIsVideoOpen(true)} // Now both paths trigger the video
                            className="text-white border-slate-700 bg-slate-900/50 hover:bg-slate-800 gap-2"
                        >
                            <Play className="w-4 h-4 fill-current text-blue-500" /> Watch Video
                        </Button>
                    </div>
                </div>

                {/* Right: Interactive Floating HexBox */}
                <div
                    className="relative flex justify-center items-center cursor-pointer group"
                    onClick={() => setIsVideoOpen(true)}
                >
                    {/* Hint Overlay for Clicking */}
                    <div className="absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/90 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-xl translate-y-20">
                        <Play className="w-4 h-4 fill-current" /> Play Video
                    </div>

                    <FloatingHexBox />
                </div>
            </div>

            {/* Basic Video Modal Placeholder */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-12">
                    {/* The Container: 
       - max-w-5xl keeps it from getting TOO huge on massive screens.
       - aspect-video maintains the 16:9 ratio automatically.
    */}
                    <div className="relative w-full max-w-5xl aspect-video bg-black border border-slate-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                        {/* Close Button: Moved outside or styled better */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white/50 hover:text-white z-[110] bg-black/20 backdrop-blur-md p-2 rounded-full transition-colors"
                        >
                            <span className="sr-only">Close</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* The Responsive Iframe */}
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/bx_nJZw9ims?autoplay=1"
                            title="HexBox Mission"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}