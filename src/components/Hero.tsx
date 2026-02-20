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
                        HexBox v1.0 is now live
                    </Badge>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1]">
                        Take back <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                            your tech.
                        </span>
                    </h1>

                    <p className="max-w-[500px] text-slate-400 text-lg md:text-xl leading-relaxed">
                        The self-hosting appliance that turns "the cloud" into "your drive."
                        Fully observable, unit-testable, and billionaire-free.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#Order">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 px-8">
                                Pre-order HexBox
                        </Button>
                        </a>
                        <a href="#HowItWorks">
                        <Button size="lg" variant="outline" className="text-white bg-slate-500 border-slate-700 hover:bg-slate-400">
                                How It Works
                        </Button>
                        </a>
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
                <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl aspect-video bg-black border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-blue-400 z-[110]"
                        >
                            Close [✕]
                        </button>
                        <div className="w-full h-full flex items-center justify-center text-slate-500">
                            {/* Replace with <video> tag or iframe once you have the file */}
                            <p>Video Player Placeholder</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}