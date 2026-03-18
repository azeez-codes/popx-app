import React from "react";

export default function MobileFrame({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-[375px] min-h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-7 pt-3 pb-1">
                    <span className="text-sm font-semibold text-black">11:23</span>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-3">
                            <svg viewBox="0 0 18 12" fill="none">
                                <rect x="0" y="3" width="3" height="9" rx="0.5" fill="#1C1C1E" />
                                <rect x="5" y="2" width="3" height="10" rx="0.5" fill="#1C1C1E" />
                                <rect x="10" y="1" width="3" height="11" rx="0.5" fill="#1C1C1E" />
                                <rect x="15" y="0" width="3" height="12" rx="0.5" fill="#1C1C1E" />
                            </svg>
                        </div>
                        <div className="w-4 h-3">
                            <svg viewBox="0 0 16 12" fill="none">
                                <path d="M8 2.4C10.4 2.4 12.5 3.4 14 5L15.4 3.6C13.5 1.6 10.9 0.4 8 0.4C5.1 0.4 2.5 1.6 0.6 3.6L2 5C3.5 3.4 5.6 2.4 8 2.4Z" fill="#1C1C1E" />
                                <path d="M8 6.4C9.5 6.4 10.8 7 11.8 7.9L13.2 6.5C11.8 5.2 10 4.4 8 4.4C6 4.4 4.2 5.2 2.8 6.5L4.2 7.9C5.2 7 6.5 6.4 8 6.4Z" fill="#1C1C1E" />
                                <circle cx="8" cy="11" r="1.5" fill="#1C1C1E" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <div className="w-6 h-3 border border-black rounded-sm relative">
                                <div className="absolute inset-[1px] right-[2px] bg-black rounded-sm" style={{ width: '65%' }} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
}