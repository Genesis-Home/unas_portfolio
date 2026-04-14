import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  "import { useFullStack } from '@core/nexus';",
  " ",
  "export function Architect() {",
  "  const { deploy, scale } = useFullStack();",
  " ",
  "  useEffect(() => {",
  "    deploy({",
  "      target: 'edge-runtime',",
  "      cluster: 'global-v1'",
  "    });",
  "    scale('dynamic-auto');",
  "  }, []);",
  " ",
  "  return <System active={true} />;",
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
      }, 400); // Speed of "live coding"
      return () => clearTimeout(timer);
    } else {
      // Loop after a delay
      const loopTimer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(loopTimer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-full bg-[#0d1117] rounded-none overflow-hidden shadow-none border-none flex flex-col font-mono text-sm">
      {/* Title Bar */}
      <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">nexus_core.tsx — VS Code</div>
        <div className="w-10"></div>
      </div>
      
      {/* Sidebar + Editor */}
      <div className="flex-1 flex">
        <div className="w-12 bg-[#0d1117] border-r border-white/5 flex flex-col items-center py-4 gap-4 text-slate-600">
          <div className="w-5 h-5 bg-white/10 rounded-sm"></div>
          <div className="w-5 h-5 bg-white/5 rounded-sm"></div>
          <div className="w-5 h-5 bg-white/5 rounded-sm"></div>
        </div>
        
        <div className="flex-1 p-6 relative overflow-hidden flex flex-col items-start justify-start">
          {visibleLines.map((line, i) => (
            <motion.div
              key={`line-${i}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex whitespace-pre mb-1 w-full"
            >
              <span className="w-8 text-slate-600 text-[10px] text-right mr-4 select-none shrink-0">{i + 1}</span>
              <span className={`text-xs ${
                line.includes('import') || line.includes('export') || line.includes('function') ? 'text-pink-500' :
                line.includes('const') || line.includes('return') ? 'text-blue-400' :
                line.includes("'") ? 'text-amber-200' : 'text-slate-300'
              }`}>
                {line}
              </span>
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-4 bg-primary ml-12 mt-1 shrink-0"
          />
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-primary px-4 py-1 flex items-center justify-between text-[10px] text-white font-bold uppercase tracking-tighter">
        <div className="flex gap-4">
          <span>main*</span>
          <span>utf-8</span>
        </div>
        <div>Typescript React</div>
      </div>
    </div>
  );
}
