import { Terminal, Check, Code2 } from "lucide-react";

// We'll use the "Item" and "Contract" snippets as they are the most readable
const yamlCode = `# Your Personal AI Instance

name: "oliver"
contract_name: "assistant"
provider_name: "ollama-assistant"

state:
  model_name: "HexGPT"
  memory_vault: "/vault/ai-memory"

# assistant.contract.yaml defines the limits:
# chat:
#   inputs: { prompt: str }
#   outputs: { message: str }
`;

export default function YamlPreview() {
    return (
        <section className="py-24 bg-slate-950 px-6" id="Architecture">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                        Observable by design.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        HexBox uses a <span className="text-blue-400">Contract-First</span> architecture.
                        Every AI assistant and backup task follows a human-readable blueprint that
                        defines exactly what data it can touch.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl bg-slate-900/50">

                    {/* Editor Column */}
                    <div className="lg:col-span-3 bg-[#0d1117] p-8 border-r border-slate-800">
                        <div className="flex items-center gap-2 mb-6 text-slate-500 text-xs uppercase tracking-widest font-mono">
                            <Code2 className="w-4 h-4 text-blue-500" />
                            eli.item.yaml
                        </div>
                        <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                            <code className="text-slate-300">
                                {yamlCode.split('\n').map((line, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="text-slate-700 text-right select-none w-4">{i + 1}</span>
                                        <span>
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

                    {/* Terminal / Validation Column */}
                    <div className="lg:col-span-2 bg-slate-900/80 p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest font-mono">
                                <Terminal className="w-4 h-4" />
                                HexOS Validator
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-slate-800" />
                                <div className="w-2 h-2 rounded-full bg-slate-800" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-slate-500 font-mono text-xs uppercase tracking-tight">Active Blueprint</p>
                                <p className="text-blue-400 font-mono text-sm">assistant.contract.v1</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 bg-blue-500/5 border border-blue-500/10 p-4 rounded-xl">
                                    <Check className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm text-slate-300 font-mono">Verify Schema: <span className="text-emerald-500">VALID</span></span>
                                </div>
                                <div className="flex items-center gap-3 bg-blue-500/5 border border-blue-500/10 p-4 rounded-xl">
                                    <Check className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm text-slate-300 font-mono">Vault Access: <span className="text-emerald-500">SECURE</span></span>
                                </div>
                            </div>

                            <div className="mt-auto pt-8 border-t border-slate-800/50">
                                <p className="text-xs text-slate-500 leading-relaxed font-mono italic">
                                    "Eli" is authorized to access local storage. No external pings detected.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}