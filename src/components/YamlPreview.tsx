import { useState } from "react";
import { Terminal, Check, Code2, Layers, ShieldCheck, Box } from "lucide-react";

const codeSnippets = {
    item: {
        language: "yaml",
        file: "eli.item.yaml",
        title: "The Living Instance",
        desc: "The final deployment. This links a name (Eli) to a specific provider and sets the local state.",
        code: `name: eli
contract_name: assistant
provider_name: echo-assistant
state:
  model_name: HexGPT
`
    },
    provider: {
        language: "yaml",
        file: "echo-assistant.provider.yaml",
        title: "The Logic Engine",
        desc: "Tells HexBox how to actually run the code. In this case, it's a local Python executor.",
        code: `name: echo-assistant
implements_contract: assistant
executor: python
methods:
  chat:
    type: python
    ref: echo/chat.py
`
    },
    Provider_Code: {
        language: "python",
        file: "chat.py",
        title: "The Code",
        desc: "A snippet of code anyone can understand and test.",
        code: `import hex

# Gather state and inputs.
model_name = hex.get_state("model_name")
prompt = hex.get_input("prompt")

# Print the response
print(f"AI ({model_name}): You said {prompt}")
`
    },
    contract: {
        language: "yaml",
        file: "assistant.contract.yaml",
        title: "The Security Layer",
        desc: "Defines the strict 'shape' of the AI. This ensures the assistant can only speak through defined inputs/outputs.",
        code: `name: assistant
state_schema:
  model_name: str
methods:
  chat:
    inputs:
      prompt: str
    outputs:
      message: str
`
    },
};

export default function YamlPreview() {
    const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>("item");

    return (
        <section className="py-24 bg-slate-950 px-6" id="Architecture">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                        Architectural <span className="text-blue-500">Transparency.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                        HexBox apps are broken into three layers. Click through the tabs to see how
                        a personal assistant is defined, secured, and executed.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {(Object.keys(codeSnippets) as Array<keyof typeof codeSnippets>).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-widest transition-all ${activeTab === tab
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                : "bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Editor Column */}
                    <div className="lg:col-span-3 bg-[#0d1117] p-8 border-r border-slate-800 min-h-[400px]">
                        <div className="flex items-center gap-2 mb-6 text-slate-500 text-xs uppercase tracking-widest font-mono">
                            <Code2 className="w-4 h-4 text-blue-500" />
                            {codeSnippets[activeTab].file}
                        </div>
                        <pre className="font-mono text-sm leading-relaxed text-slate-300">
                            <code>
                                {codeSnippets[activeTab].code.split('\n').map((line, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="text-slate-700 w-4 text-right">{i + 1}</span>

                                        <span>
                                            {/* Simple logic: if it's python, use different colors than YAML */}
                                            {codeSnippets[activeTab].language === 'python' ? (
                                                // Python Logic
                                                line.trim().startsWith('#') ? (
                                                    <span className="text-emerald-500/80 italic">{line}</span>
                                                ) : (
                                                    // Split on braces to isolate the variables inside the f-string
                                                    line.split(/(\{|\})/).map((word, i) => {
                                                        // Highlight the braces and the variables inside them as Blue/Cyan
                                                        if (word === '{' || word === '}') {
                                                            return <span key={i} className="text-blue-400 font-bold">{word}</span>;
                                                        }

                                                        // If we are inside the braces (odd indexes in this specific split), keep it blue
                                                        if (i % 4 === 2) {
                                                            return <span key={i} className="text-blue-400">{word}</span>;
                                                        }

                                                        // Handle the rest of the line with standard keywords
                                                        return word.split(/(\s+|\.|\(|\))/).map((part, j) => {
                                                            if (part === 'import' || part === 'hex' || part === 'print') {
                                                                const color = part === 'import' ? 'text-purple-400' : 'text-yellow-400';
                                                                return <span key={j} className={color}>{part}</span>;
                                                            }
                                                            // Make the f-string and its contents Emerald Green
                                                            if (part.includes('"') || part.includes("'") || part === "You" || part === "said") {
                                                                return <span key={j} className="text-emerald-400">{part}</span>;
                                                            }
                                                            return <span key={j} className="text-slate-300">{part}</span>;
                                                        });
                                                    })
                                                )
                                            ) : (
                                                <span>
                                                    <span className="text-blue-400">{line.split(':')[0]}</span>
                                                    {line.includes(':') && <span className="text-emerald-400">:{line.split(':')[1]}</span>}
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>

                    {/* Context Column */}
                    <div className="lg:col-span-2 bg-slate-900/80 p-8 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    {activeTab === 'contract' && <ShieldCheck className="w-4 h-4 text-blue-400" />}
                                    {activeTab === 'provider' && <Layers className="w-4 h-4 text-blue-400" />}
                                    {activeTab === 'Provider_Code' && <Terminal className="w-4 h-4 text-blue-400" />}
                                    {activeTab === 'item' && <Box className="w-4 h-4 text-blue-400" />}
                                    {codeSnippets[activeTab].title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {codeSnippets[activeTab].desc}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    Verified by HexOS Core
                                </div>
                                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                                    <Check className="w-3 h-3 text-emerald-500" />
                                    Local Execution Only
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}