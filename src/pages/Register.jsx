import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";
import FloatingInput from "../components/FloatingInput";

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "yes",
    });

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/AccountSettings");
    };

    return (
        <MobileFrame>
            <div className="flex-1 flex flex-col px-6 pt-8 overflow-y-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Create your
                    <br />
                    PopX account
                </h1>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <FloatingInput
                        label="Full Name"
                        value={form.fullName}
                        onChange={handleChange("fullName")}
                        required
                    />
                    <FloatingInput
                        label="Phone number"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        required
                    />
                    <FloatingInput
                        label="Email address"
                        type="email"
                        value={form.email}
                        onChange={handleChange("email")}
                        required
                    />
                    <FloatingInput
                        label="Password"
                        type="password"
                        value={form.password}
                        onChange={handleChange("password")}
                        required
                    />
                    <FloatingInput
                        label="Company name"
                        value={form.company}
                        onChange={handleChange("company")}
                    />

                    {/* Agency Radio */}
                    <div>
                        <p className="text-sm text-gray-800 mb-3">
                            Are you an Agency?
                            <span className="text-red-500 ml-0.5">*</span>
                        </p>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="yes"
                                        checked={form.isAgency === "yes"}
                                        onChange={handleChange("isAgency")}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.isAgency === "yes"
                                                ? "border-violet-600"
                                                : "border-gray-300"
                                            }`}
                                    >
                                        {form.isAgency === "yes" && (
                                            <div className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                                        )}
                                    </div>
                                </div>
                                <span className="text-sm text-gray-700">Yes</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="no"
                                        checked={form.isAgency === "no"}
                                        onChange={handleChange("isAgency")}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.isAgency === "no"
                                                ? "border-violet-600"
                                                : "border-gray-300"
                                            }`}
                                    >
                                        {form.isAgency === "no" && (
                                            <div className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                                        )}
                                    </div>
                                </div>
                                <span className="text-sm text-gray-700">No</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-violet-600 text-white font-medium py-3.5 rounded-md hover:bg-violet-700 transition-colors"
                    >
                        Create Account
                    </button>
                </form>
                <div className="h-6" />
            </div>
        </MobileFrame>
    );
}