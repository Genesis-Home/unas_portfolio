import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  "import { useSystemMesh, EdgeRuntime } from '@nexus/core';",
  " ",
  "export function CoreService() {",
  "  const { deploy, autoScale } = useSystemMesh();",
  "  const latency = useTelemetry('edge-ms');",
  " ",
  "  useEffect(() => {",
  "    deploy({",
  "      target: 'global-edge',",
  "      replicaCount: 5,",
  "      routing: 'dynamic-latency'",
  "    });",
  " ",
  "    if (latency > 120) {",
  "      autoScale('horizontal', { max: 24 });",
  "    }",
  "  }, [latency]);",
  " ",
  "  return <ServiceNode active={true} load={latency} />;",
  "}"
];

export function CodeEditor() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, codeLines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 350); // Live coding typing speed
      return () => clearTimeout(timer);
    } else {
      const loopTimer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentIndex(0);
      }, 4000);
      return () => clearTimeout(loopTimer);
    }
  }, [currentIndex]);

  const highlightLine = (line: string) => {
    if (line.trim() === "") return <span className="h-4 block" />;

    // Split words or parse simple tokens
    const tokens = line.split(/(\s+|=|>|<|\(|\)|\{|\}|\[|\]|,|;|'[^']*'|"[^"]*")/g);

    return tokens.map((token, i) => {
      const trimmed = token.trim();
      
      // Keywords (Blue/Purple)
      if (['import', 'export', 'const', 'return', 'function', 'if', 'from'].includes(trimmed)) {
        return <span key={i} className="text-[#ff7b72] font-semibold">{token}</span>;
      }
      
      // Built-in React/Hooks (Orange)
      if (['useEffect', 'useState', 'useTelemetry', 'useSystemMesh'].includes(trimmed)) {
        return <span key={i} className="text-[#d2a6ff] font-semibold">{token}</span>;
      }
      
      // Strings (Green)
      if ((token.startsWith("'") && token.endsWith("'")) || (token.startsWith('"') && token.endsWith('"'))) {
        return <span key={i} className="text-[#a5d6ff]">{token}</span>;
      }

      // XML/HTML tags (Green-cyan)
      if (['ServiceNode', '<ServiceNode', '/>'].includes(trimmed) || trimmed.startsWith('<') || trimmed.endsWith('/>')) {
        return <span key={i} className="text-[#7ee787] font-medium">{token}</span>;
      }

      // Numbers & Booleans (Teal)
      if (['true', 'false', '5', '120', '24'].includes(trimmed)) {
        return <span key={i} className="text-[#79c0ff]">{token}</span>;
      }

      // Plain Code
      return <span key={i} className="text-[#c9d1d9]">{token}</span>;
    });
  };

  return (
    <div className="w-full h-full bg-[#0d1117] rounded-none overflow-hidden shadow-none border-none flex flex-col font-mono text-sm select-none">
      {/* Tab/Title Bar */}
      <div className="bg-[#161b22] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center gap-2">
          <span className="text-[#3b82f6] text-[12px]">◈</span>
          nexus_core.tsx — VS Code
        </div>
        <div className="w-10" />
      </div>
      
      {/* Main Workspace */}
      <div className="flex-1 flex bg-[#0d1117]">
        {/* Editor Sidebar */}
        <div className="w-12 bg-[#090d16] border-r border-white/5 flex flex-col items-center py-4 gap-5 text-slate-600">
          <div className="w-5 h-5 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[10px] text-[#3b82f6]">⌨</div>
          <div className="w-5 h-5 bg-white/5 rounded-sm" />
          <div className="w-5 h-5 bg-white/5 rounded-sm" />
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-6 relative overflow-hidden flex flex-col items-start justify-start">
          {visibleLines.map((line, i) => (
            <motion.div
              key={`line-${i}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="flex whitespace-pre mb-1 w-full text-xs"
            >
              <span className="w-8 text-slate-600 text-[10px] text-right mr-4 select-none shrink-0 font-medium">{i + 1}</span>
              <span className="flex-1 text-left leading-5">
                {highlightLine(line)}
              </span>
            </motion.div>
          ))}
          {/* Typing Blinking Cursor */}
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-1.5 h-4 bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] ml-12 mt-1 shrink-0"
          />
        </div>
      </div>
      
      {/* Bottom Status Bar */}
      <div className="bg-[#3b82f6] px-4 py-1.5 flex items-center justify-between text-[10px] text-white font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">⎋ main*</span>
          <span>utf-8</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>Telemetry: OK</span>
          <span>TypeScript React</span>
        </div>
      </div>
    </div>
  );
}
