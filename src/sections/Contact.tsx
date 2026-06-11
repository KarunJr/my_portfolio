"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    console.log(name);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
        {
          name: form.name,
          email: form.email,
          time: new Date().toLocaleTimeString(),
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error("Something went wrong!", error);
      setLoading(false);
      alert("Something went wrong!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <section className="sm:px-10 px-5 my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <Image
          src={"/assets/terminal.png"}
          alt="terminal_background"
          fill
          priority
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
          <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient">
            Let&#39;s talk
          </h3>
          <p className="text-lg text-neutral-500 mt-3">
            Whether you&#39;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&#39;m here
            to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-3"
          >
            <label className="space-y-3">
              <span className="text-lg text-neutral-500">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-500 text-lg text-white-800 focus:outline-none"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-neutral-500">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-500 text-lg text-white-800 focus:outline-none"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-neutral-500">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={2}
                className="w-full bg-neutral-800 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-500 text-lg text-white-800 focus:outline-none"
                placeholder="Hi, I&#39;m interested in..."
              />
            </label>

            <button
              className="bg-neutral-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3 cursor-pointer active:scale-95"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <Image
                src={"/assets/arrow-up.png"}
                alt="arrow-up"
                height={5}
                width={5}
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
