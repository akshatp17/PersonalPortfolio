import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const formRef = useRef();
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        emailjs.sendForm(
            "service_24r8j2j",   // Replace with your actual Service ID
            "template_hpfcpun",  // Replace with your Template ID
            formRef.current,
            "hrvkCXq5o7RxX44nk"    // Replace with your Public Key
        )
            .then(
                (result) => {
                    setMessage("Email sent successfully!");
                    reset(); // Reset form fields after success
                },
                (error) => {
                    setMessage("Failed to send email. Try again.");
                    console.error(error);
                }
            );
    };

    return (
        <div className="flex justify-center items-center bg-black px-4">
            <div className="w-full max-w-lg bg-black p-8 rounded-lg">

                <form ref={formRef} onSubmit={handleSubmit(sendMessage)} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <input
                        type="text"
                        placeholder="Subject"
                        {...register("subject", { required: "Subject is required" })}
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
                    />
                    {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}

                    <textarea
                        placeholder="Message"
                        {...register("message", { required: "Message is required" })}
                        className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 h-32 resize-none"
                    ></textarea>
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}

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
