import { ShieldCheck, HardDrive, FileCode, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        title: "Cloud Decoupler",
        description: "The MVP focus: Automatically sync and backup your cloud files to your physical local drive. Your data, your electricity, your rules.",
        icon: <HardDrive className="w-6 h-6 text-blue-400" />,
        className: "md:col-span-2",
    },
    {
        title: "Full Observability",
        description: "No black boxes. See exactly how every app runs in real-time.",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        className: "md:col-span-1",
    },
    {
        title: "YAML-First Infrastructure",
        description: "Configured via human-readable files. If you can read a list, you can manage your server.",
        icon: <FileCode className="w-6 h-6 text-purple-400" />,
        className: "md:col-span-1",
    },
    {
        title: "Unit-Tested Reliability",
        description: "The only home appliance that lets you run tests before you deploy. Stop guessing if your backup script works—know it does.",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        className: "md:col-span-2",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-slate-950 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Own Your Piece of the Internet
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Stop renting your digital life from billionaires. HexBox is the
                        self-hosting appliance designed for total transparency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <Card key={index} className={`bg-slate-900/50 border-slate-800 backdrop-blur-sm ${feature.className}`}>
                            <CardHeader>
                                <div className="mb-4">{feature.icon}</div>
                                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}