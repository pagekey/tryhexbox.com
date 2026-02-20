import { Terminal, Cpu, CloudOff, CheckCircle2 } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Connect Your Cloud",
        description: "Link your existing cloud services (Drive, Dropbox, iCloud) through our encrypted gateway. No passwords stored, only access tokens.",
        icon: <CloudOff className="w-5 h-5" />,
    },
    {
        step: "02",
        title: "Define Your 'Hex' Logic",
        description: "Use simple YAML files to define what gets backed up and when. Want to unit-test your sync logic? Write a 3-line snippet and run it locally.",
        icon: <Terminal className="w-5 h-5" />,
    },
    {
        step: "03",
        title: "Execute & Observe",
        description: "The appliance takes over. Watch the real-time logs in your dashboard. If a single byte moves, you'll see exactly why and where.",
        icon: <Cpu className="w-5 h-5" />,
    },
    {
        step: "04",
        title: "Own the Hardware",
        description: "Your files are now physically in your home. Disconnect the internet, and your data stays. No monthly fees, no tracking.",
        icon: <CheckCircle2 className="w-5 h-5" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Three commands to <span className="text-blue-500">digital sovereignty.</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We stripped away the complexity of server management and replaced it with
                            developer-friendly transparency.
                        </p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg font-mono text-sm text-blue-400 w-full md:w-auto">
                        <p>$ hexbox init --source="gdrive"</p>
                        <p className="text-slate-500">$ hexbox test ./backup.yaml</p>
                        <p className="text-emerald-500">$ hexbox up --detach</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-slate-800 z-0" />

                    {steps.map((item, idx) => (
                        <div key={idx} className="relative z-10 group">
                            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                <span className="text-blue-500 font-bold">{item.step}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
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