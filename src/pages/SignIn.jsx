import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import FloatingInput from "../components/FloatingInput";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/AccountSettings");
    };

    return (
        <MobileFrame>
            <div className="flex-1 flex flex-col px-6 pt-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Signin to your
                    <br />
                    PopX account
                </h1>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit,
                </p>
                <form onSubmit={handleLogin} className="space-y-5">
                    <FloatingInput
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FloatingInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-gray-300 text-white font-medium py-3.5 rounded-md mt-2 hover:bg-violet-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </MobileFrame>
    );
}