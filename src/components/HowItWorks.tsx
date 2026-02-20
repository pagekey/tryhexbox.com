import { PlugZap, Globe, ShieldCheck, HardDriveDownload } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Plug & Play",
        description: "Connect the HexBox to your power and router. No complicated BIOS or OS installation required—it's ready out of the box.",
        icon: <PlugZap className="w-5 h-5" />,
    },
    {
        step: "02",
        title: "Access Local",
        description: "Open 'hexbox.local' in any browser on your network. Your private dashboard is served directly from the physical hardware in your room.",
        icon: <Globe className="w-5 h-5" />,
    },
    {
        step: "03",
        title: "Sync the Vault",
        description: "Select your legacy cloud providers. HexBox begins pulling your data into your 32GB local module through an encrypted gateway.",
        icon: <HardDriveDownload className="w-5 h-5" />,
    },
    {
        step: "04",
        title: "Total Sovereignty",
        description: "Once synced, you can disconnect the internet. Your data is physically yours, under your own roof.",
        icon: <ShieldCheck className="w-5 h-5" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900" id="HowItWorks">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
                            From unboxing to <span className="text-blue-500">sovereignty.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Setting up a private server shouldn't require a CS degree. We built
                            a dead-simple local interface that keeps you in command.
                        </p>
                    </div>

                    {/* The "Power User" Easter Egg */}
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl font-mono text-sm shadow-2xl w-full md:w-auto">
                        <div className="flex gap-2 mb-4 text-slate-700">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <p className="text-blue-400"># Site: hexbox.local</p>
                        <p className="text-slate-400">Status: <span className="text-emerald-500">Connected</span></p>
                        <p className="text-slate-400">Vault: <span className="text-blue-400">32GB Ready</span></p>
                        <p className="text-slate-500 mt-2 animate-pulse">_ Awaiting sync...</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-slate-800 z-0" />

                    {steps.map((item, idx) => (
                        <div key={idx} className="relative z-10 group">
                            <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:bg-blue-500/5 transition-all duration-300">
                                <span className="text-blue-500 font-bold font-mono">{item.step}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}