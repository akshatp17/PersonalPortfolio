import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const sendMessage = () => {

    };

    return (
        <div className="flex justify-center items-center bg-black px-4">
            <div className="w-full max-w-lg bg-black p-8 rounded-lg">
                <form onSubmit={handleSubmit(sendMessage)} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                        required
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        {...register("email", { required: "Email is required" })}
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        {...register("subject", { required: "Subject is required" })}
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                    />
                    <textarea
                        placeholder="Message"
                        required
                        {...register("message", { required: "Message is required" })}
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 h-32 resize-none overflow-hidden"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-sky-300 text-black font-semibold py-3 rounded-md hover:bg-sky-600 hover:cursor-pointer transition duration-250"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
