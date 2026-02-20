import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-4">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

            <Badge variant="outline" className="mb-4 border-blue-500/50 text-blue-400">
                HexBox v1.0 is now live
            </Badge>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white text-center mb-6">
                Think outside <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    the Hexagon.
                </span>
            </h1>

            <p className="max-w-[600px] text-slate-400 text-center text-lg md:text-xl mb-8">
                The all-in-one sandbox for developers who need more than just a square solution.
                Deploy, debug, and dominate in six dimensions.
            </p>

            <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500">
                    Get Started for Free
                </Button>
                <Button size="lg" variant="outline" className="text-white bg-slate-500 border-slate-700 hover:bg-slate-800 hover:text-white">
                    View Documentation
                </Button>
            </div>
        </div>
    );
}