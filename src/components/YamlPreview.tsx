import { Terminal, Check, Play, FileJson } from "lucide-react";

const yamlCode = `
# HexBox Backup Configuration
# Source: Google Drive -> Local Drive

appliance:
  name: "Main-Vault"
  observability: full
  
tasks:
  - name: "Cloud-Sync"
    source: cloud://google-drive/photos
    destination: local://external-hd/backups
    schedule: "0 0 * * *" # Daily at midnight
    
tests:
  - name: "Verify Destination"
    assert: destination.is_writable == true
  - name: "Check Space"
    assert: destination.available_gb > 10
`;

export default function YamlPreview() {
    return (
        <section className="py-24 bg-slate-950 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Observable by design.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        No proprietary hidden logic. Every action HexBox takes is defined in
                        human-readable YAML and verified with local unit tests.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">

                    {/* Editor Column */}
                    <div className="lg:col-span-3 bg-[#0d1117] p-6 border-r border-slate-800">
                        <div className="flex items-center gap-2 mb-4 text-slate-500 text-xs uppercase tracking-widest font-mono">
                            <FileJson className="w-4 h-4" />
                            config.yaml
                        </div>
                        <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                            <code className="text-slate-300">
                                {yamlCode.split('\n').map((line, i) => (
                                    <div key={i} className="table-row">
                                        <span className="table-cell pr-4 text-slate-600 text-right select-none w-8">{i + 1}</span>
                                        <span className="table-cell">
                                            {line.startsWith('#') ? (
                                                <span className="text-slate-500 italic">{line}</span>
                                            ) : line.includes(':') ? (
                                                <>
                                                    <span className="text-blue-400">{line.split(':')[0]}:</span>
                                                    <span className="text-emerald-400">{line.split(':')[1]}</span>
                                                </>
                                            ) : (
                                                line
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>

                    {/* Terminal / Test Column */}
                    <div className="lg:col-span-2 bg-slate-900 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-mono">
                                <Terminal className="w-4 h-4" />
                                Terminal
                            </div>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <Play className="w-4 h-4 text-blue-500 mt-1" />
                                <div>
                                    <p className="text-slate-300 font-mono text-sm">$ hexbox test config.yaml</p>
                                    <p className="text-slate-500 text-xs mt-1">Running 2 locally defined tests...</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-lg">
                                    <Check className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm text-emerald-200 font-mono italic">Verify Destination: PASS</span>
                                </div>
                                <div className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-lg">
                                    <Check className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm text-emerald-200 font-mono italic">Check Space: PASS</span>
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-800">
                                <p className="text-xs text-slate-500 leading-relaxed font-mono">
                                    [SUCCESS] All logic verified. HexBox is ready for
                                    sovereign deployment.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}