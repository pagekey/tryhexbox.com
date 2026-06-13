import { HardDrive, GitGraph, Image, Network, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
    {
        id: "backups",
        title: "Deterministic Backups",
        description: "Pull files and documents directly from legacy platforms onto your bare metal. Every payload transfer is a verifiable execution node, meaning zero corrupted files.",
        icon: <HardDrive className="w-6 h-6 text-blue-400" />,
        className: "md:col-span-2",
        status: "MVP Feature",
        statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
        id: "photos",
        title: "Self-Hosted Photos",
        description: "An isolated, secure media gallery operating entirely out of your local storage. High-speed indexing without giving megacorps an ML training license to your memories.",
        icon: <Image className="w-6 h-6 text-emerald-400" />,
        className: "md:col-span-1",
        status: "MVP Feature",
        statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
        id: "dag",
        title: "Visual DAG Studio",
        description: "Coming Soon: Stop writing YAML by hand. Arrange, connect, and deploy workflows using a node graph designer that turns complex scripting into clean data paths.",
        icon: <GitGraph className="w-6 h-6 text-purple-400" />,
        className: "md:col-span-1",
        status: "In Development",
        statusColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
        id: "vpn",
        title: "VPN Traffic Tunneling",
        description: "Coming Soon: The ultimate physical firewall. Encrypt external communication and audit your home network in real-time to watch exactly where 'smart' tech tries to leak your metadata.",
        icon: <Network className="w-6 h-6 text-cyan-400" />,
        className: "md:col-span-2",
        status: "Planned Roadmap",
        statusColor: "bg-slate-800 text-slate-500 border-slate-700"
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-slate-950 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                        Own Your Piece of the Internet
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Stop renting your digital life from billionaires. HexBox combines the power of
                        isolated container computing with deterministic graph workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature) => (
                        <Card
                            key={feature.id}
                            className={`bg-slate-900/50 border-slate-800 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-between ${feature.className}`}
                        >
                            <div>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="mb-4 p-2 bg-slate-950 rounded-lg border border-slate-800/80 group-hover:border-slate-700 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <Badge variant="outline" className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full ${feature.statusColor}`}>
                                            {feature.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-white text-xl font-bold tracking-tight">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </div>

                            {/* Conditional Footer for the Photos Card */}
                            {feature.id === "photos" && (
                                <CardFooter className="pt-0">
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="w-full justify-between bg-slate-950/40 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 group/btn font-mono text-xs tracking-wider uppercase transition-all duration-300"
                                    >
                                        <Link to="/photos">
                                            Learn more
                                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/btn:translate-x-1 group-hover/btn:text-emerald-400 transition-all" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            )}

                            {/* Background glow effect */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
