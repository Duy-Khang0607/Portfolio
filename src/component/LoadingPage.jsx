import React, { useState, useEffect } from 'react';
import avatar from '../assets/avatar copy.webp';

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [cpu, setCpu] = useState(0);
  const [ram, setRam] = useState(0);
  const [disk, setDisk] = useState(0);
  const [net, setNet] = useState(0);

  const consoleLogs = [
    { text: '✓ Bootstrapping environment...', delay: 300 },
    { text: '✓ Loading dependencies...', delay: 500 },
    { text: '✓ Compiling TypeScript...', delay: 700 },
    { text: '✓ Warning: Deprecated API usage detected', delay: 400 },
    { text: '✓ Running unit tests...', delay: 600 },
    { text: '✓ Warning: Module X failed to optimize, retrying...', delay: 500 },
    { text: '> Optimizing build chunks.__', delay: 800 },
  ];

   // Progress animation
  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            if (onLoadingComplete) {
              setTimeout(() => onLoadingComplete(), 500);
            }
          }, 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Console logs animation
  useEffect(() => {
    if (currentLogIndex < consoleLogs.length) {
      const timer = setTimeout(() => {
        setCurrentLogIndex(currentLogIndex + 1);
      }, consoleLogs[currentLogIndex]?.delay || 500);

      return () => clearTimeout(timer);
    }
  }, [currentLogIndex]);

  // Resource monitor animation - sync with progress
  useEffect(() => {
    setCpu(progress);
    setRam(progress);
    setDisk(progress);
    setNet(progress / 10); 
  }, [progress]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-gradient-to-br from-[#0a0e1a] via-[#0d1117] to-[#0a0e1a] flex items-center justify-center transition-opacity duration-500 overflow-auto ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow pointer-events-none" />
      
      <div className="relative max-w-6xl w-full px-4 md:px-6 py-2">
        {/* ASCII Logo with glow effect */}
        <div className="text-center mb-3">
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-2xl opacity-30 bg-green-500" />
            <pre className="relative text-green-400 text-[10px] md:text-xs font-mono inline-block leading-tight overflow-x-auto max-w-full drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
{`
 _   ___  _    _    _   _  ____   _   _ ____ _   _ __   __ _____ _   _ 
| | / / || |  / \\  | \\ | |/ ___| | \\ | / ___| | | |\\ \\ / /| ____| \\ | |
| |/ /| || |_/ _ \\ |  \\| | |  _  |  \\| | |  _| | | | \\ V / |  _| |  \\| |
|   < |__   _/ ___ \\| |\\  | |_| | | |\\  | |_| | |_| |  | |  | |___| |\\  |
|_|\\_\\   |_|/_/   \\_\\_| \\_|\\____| |_| \\_|\\____|\\___/   |_|  |_____|_| \\_|
`}
            </pre>
          </div>
          <h1 className="text-green-400 text-base md:text-lg font-mono mt-2 font-semibold tracking-wider drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
            Developer Console
          </h1>
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
            <span className="text-green-500/70 text-[10px] font-mono">System Online</span>
          </div>
        </div>

        {/* Main Progress Bar with percentage */}
        <div className="mb-3 px-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-green-400 font-mono text-[10px]">Loading Progress</span>
            <span className="text-green-400 font-mono text-sm font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="relative h-2.5 bg-gray-900/50 rounded-full overflow-hidden border border-green-500/30 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-shimmer" />
            <div
              className="h-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 transition-all duration-300 ease-out relative shadow-[0_0_15px_rgba(34,197,94,0.6)]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-3">
          {/* Console Logs */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl opacity-20 group-hover:opacity-30 blur transition duration-300" />
            <div className="relative border border-green-500/40 rounded-xl p-3 bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-green-500/20">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="text-green-400 font-mono text-[10px] ml-1">terminal.log</span>
              </div>
              <div className="space-y-1 font-mono text-[10px] max-h-[110px] overflow-auto custom-scrollbar">
                {consoleLogs.slice(0, currentLogIndex).map((log, index) => (
                  <div
                    key={index}
                    className="text-green-400/90 hover:text-green-300 transition-colors animate-fade-in flex items-start gap-2"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    <span className="text-green-500 opacity-50 select-none">$</span>
                    <span>{log.text}</span>
                  </div>
                ))}
                {currentLogIndex === consoleLogs.length && (
                  <div className="text-green-400 flex items-center gap-2">
                    <span className="text-green-500 opacity-50">$</span>
                    <span className="inline-block animate-blink">_</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Resource Monitor */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl opacity-20 group-hover:opacity-30 blur transition duration-300" />
            <div className="relative border border-green-500/40 rounded-xl p-3 bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl shadow-2xl">
              <div className="text-center mb-3">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-spin-slow opacity-20 blur" />
                  <div className="relative w-full h-full rounded-full border-2 border-green-500/50 overflow-hidden bg-gray-900 shadow-[0_0_20px_rgba(34,197,94,0.4)] ring-2 ring-green-500/30 ring-offset-2 ring-offset-gray-900">
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="text-green-400 font-mono text-xs font-semibold tracking-wide">Resource Monitor</h3>
              </div>

              <div className="space-y-2 font-mono text-[10px]">
                {/* CPU */}
                <div className="group/item">
                  <div className="flex justify-between mb-1 items-center">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 font-semibold">CPU</span>
                    </div>
                    <span className="text-green-400 font-bold text-sm tabular-nums">{Math.round(cpu)}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-900/80 rounded-full overflow-hidden border border-green-500/30 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.5)] relative"
                      style={{ width: `${cpu}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* RAM */}
                <div className="group/item">
                  <div className="flex justify-between mb-1 items-center">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                      <span className="text-green-400 font-semibold">RAM</span>
                    </div>
                    <span className="text-yellow-400 font-bold text-sm tabular-nums">{Math.round(ram)}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-900/80 rounded-full overflow-hidden border border-yellow-500/30 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-300 shadow-[0_0_10px_rgba(234,179,8,0.5)] relative"
                      style={{ width: `${ram}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Disk */}
                <div className="group/item">
                  <div className="flex justify-between mb-1 items-center">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-green-400 font-semibold">DISK</span>
                    </div>
                    <span className="text-red-400 font-bold text-sm tabular-nums">{Math.round(disk)}%</span>
                  </div>
                  <div className="relative h-2 bg-gray-900/80 rounded-full overflow-hidden border border-red-500/30 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 shadow-[0_0_10px_rgba(239,68,68,0.5)] relative"
                      style={{ width: `${disk}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Network */}
                <div className="group/item">
                  <div className="flex justify-between mb-1 items-center">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-green-400 font-semibold">NET</span>
                    </div>
                    <span className="text-blue-400 font-bold text-sm tabular-nums">{net.toFixed(1)} MB/s</span>
                  </div>
                  <div className="relative h-2 bg-gray-900/80 rounded-full overflow-hidden border border-blue-500/30 shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] relative"
                      style={{ width: `${(net / 10) * 100}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono font-bold text-xs">&gt;</span>
            </div>
            <p className="text-yellow-400 font-mono text-xs">
              STATUS: Module optimization in progress...
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateX(-10px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.7);
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;

