import React, { useState } from "react";

export default function FloatingInput({
    label,
    type = "text",
    value,
    onChange,
    required = false,
}) {
    const [focused, setFocused] = useState(false);
    const isActive = focused || (value && value.length > 0);

    return (
        <div className="relative w-full">
            <label
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${isActive
                        ? "top-1.5 text-xs text-violet-600 font-medium"
                        : "top-3.5 text-sm text-gray-400"
                    }`}
            >
                {label}
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`w-full pt-5 pb-2 px-3 text-sm text-gray-800 border rounded-md outline-none transition-colors duration-200 bg-white ${focused ? "border-violet-500" : "border-gray-300"
                    }`}
            />
        </div>
    );
}