import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

	const {
		register,
		handleSubmit,
		reset,
	} = useForm();

	const formRef = useRef();

	const showToast = (type, message) => {
		setToast({ type, message });
		setTimeout(() => setToast(null), 3500);
	};

	const sendMessage = (data) => {
		setIsLoading(true);
		emailjs
			.send(
				"service_24r8j2j",
				"template_hpfcpun",
				{
					name: data.name,
					email: data.email,
					subject: data.subject,
					message: data.message,
				},
				"hrvkCXq5o7RxX44nk",
			)
			.then(
				() => {
					reset();
					setIsLoading(false);
					showToast("success", "Message sent successfully!");
				},
				(error) => {
					console.error("EmailJS Error:", error);
					setIsLoading(false);
					showToast("error", "Failed to send message. Try again.");
				},
			);
	};

	return (
		<>
			{/* Toast Notification */}
			<AnimatePresence>
				{toast && (
					<motion.div
						className={`fixed top-6 left-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg ${
							toast.type === "success"
								? "bg-green-600"
								: "bg-red-600"
						} text-white`}
						initial={{ opacity: 0, y: -30, x: "-50%" }}
						animate={{ opacity: 1, y: 0, x: "-50%" }}
						exit={{ opacity: 0, y: -30, x: "-50%" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					>
						{toast.type === "success" ? (
							<CheckCircle size={22} />
						) : (
							<XCircle size={22} />
						)}
						<span className="text-sm font-medium">
							{toast.message}
						</span>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="flex justify-center items-center px-4">
				<div className="w-full max-w-lg p-8 rounded-lg">
					<form
						ref={formRef}
						onSubmit={handleSubmit(sendMessage)}
						className="space-y-4"
					>
						<input
							type="text"
							placeholder="Name"
							{...register("name", { required: "Name is required" })}
							className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
							required
						/>

						<input
							type="email"
							placeholder="Email"
							{...register("email", {
								required: "Email is required",
							})}
							className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
							required
						/>

						<input
							type="text"
							placeholder="Subject"
							{...register("subject", {
								required: "Subject is required",
							})}
							className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400"
							required
						/>

						<textarea
							placeholder="Message"
							{...register("message", {
								required: "Message is required",
							})}
							className="w-full p-3 bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 h-32 resize-none"
							required
						></textarea>

						<button
							type="submit"
							className={`w-full bg-sky-300 text-black font-semibold py-3 rounded-md hover:bg-sky-600 transition duration-250 ${isLoading ? "hover:cursor-not-allowed" : "hover:cursor-pointer"}`}
							disabled={isLoading}
						>
							{isLoading ? "SENDING MESSAGE..." : "SEND MESSAGE"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
