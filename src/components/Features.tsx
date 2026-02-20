import { ShieldCheck, HardDrive, FileCode, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Ensure this is imported from your UI kit

const features = [
    {
        title: "The Personal Vault",
        description: "Automatically pull your photos and documents from legacy cloud providers onto your physical drive. If the cloud disappears tomorrow, your memories don't.",
        icon: <HardDrive className="w-6 h-6 text-blue-400" />,
        className: "md:col-span-2",
        status: "MVP Feature",
        statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
        title: "Traffic Guardian",
        description: "Coming soon: The future of the HexBox. Watch your data flow in real-time and see exactly which 'smart' devices are leaking data to foreign servers.",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        className: "md:col-span-1",
        status: "Upcoming",
        statusColor: "bg-slate-800 text-slate-500 border-slate-700"
    },
    {
        title: "Blueprint Control",
        description: "Configure your digital life via human-readable YAML files. If you can read a list, you can manage your server. No 'black box' logic allowed.",
        icon: <FileCode className="w-6 h-6 text-purple-400" />,
        className: "md:col-span-1",
        status: "MVP Feature",
        statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
        title: "Verified Reliability",
        description: "The first home appliance with built-in unit testing. Every backup and sync is verified by the engine before it finishes. No more corrupted file surprises.",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        className: "md:col-span-2",
        status: "MVP Feature",
        statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
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
                        <Card key={index} className={`bg-slate-900/50 border-slate-800 backdrop-blur-sm relative overflow-hidden group ${feature.className}`}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="mb-4">{feature.icon}</div>
                                    <Badge variant="outline" className={`text-[10px] uppercase tracking-tighter ${feature.statusColor}`}>
                                        {feature.status}
                                    </Badge>
                                </div>
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