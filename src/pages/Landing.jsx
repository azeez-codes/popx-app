import React from "react";
import { Link } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";

export default function Landing() {
    return (
        <MobileFrame>
            <div className="flex-1 flex flex-col justify-end px-6 pb-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Welcome to PopX
                </h1>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit,
                </p>
                <Link
                    to="/Register"
                    className="w-full bg-violet-600 text-white text-center font-medium py-3.5 rounded-md mb-3 block hover:bg-violet-700 transition-colors"
                >
                    Create Account
                </Link>
                <Link
                    to="/SignIn"
                    className="w-full bg-violet-200 text-violet-700 text-center font-medium py-3.5 rounded-md block hover:bg-violet-300 transition-colors"
                >
                    Already Registered? Login
                </Link>
            </div>
        </MobileFrame>
    );
}