"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, User, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactSection() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values : z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className=" bg-gradient-to-br py-8 md:py-12 from-blue-50 to-purple-50n flex items-center">
      <motion.div
        className="container max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Have a question before booking your clean?
          </h2>
          <p className="text-xl text-gray-600">
            Visit our{" "}
            <a href="/faq" className="text-blue-600 hover:underline">
              FAQ Page
            </a>{" "}
            or get in touch with us:
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      {...form.register("name")}
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {form.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      {...form.register("email")}
                      placeholder="your.email@example.com"
                      type="email"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {form.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    {...form.register("message")}
                    placeholder="Tell us about your cleaning needs..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg min-h-[150px]"
                  />
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                </div>
                {form.formState.errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
