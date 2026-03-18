import React from "react";
import MobileFrame from "../components/MobileFrame";
import { Camera } from "lucide-react";

export default function AccountSettings() {
    return (
        <MobileFrame>
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="px-6 pt-4 pb-3 border-b border-gray-200">
                    <h1 className="text-lg font-bold text-gray-900">Account Settings</h1>
                </div>

                {/* Profile Section */}
                <div className="px-6 pt-6">
                    <div className="flex items-start gap-4">
                        {/* Avatar with camera icon */}
                        <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center">
                                <Camera className="w-3 h-3 text-white" />
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="pt-1">
                            <h2 className="text-base font-semibold text-gray-900">
                                Married Jamal
                            </h2>
                            <p className="text-sm text-gray-500 mt-0.5">
                                Married@Gmail.Com
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mt-5 leading-relaxed">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                        Erat, Sed Diam
                    </p>
                </div>

                {/* Divider line */}
                <div className="mt-6 border-t border-dashed border-gray-300" />
            </div>
        </MobileFrame>
    );
}