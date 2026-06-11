"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await recaptchaRef.current.execute();

      if (!token) throw new Error();

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
          token,
        }),
      });

      if (!response.ok) throw new Error();

      setEmailSubmitted(true);
    } catch {
      setCaptchaError(true);
    } finally {
      recaptchaRef.current.reset();
    }
  };

  return (
    <section
      id="contact"
      className="grid lg:grid-cols-2 gap-12 py-32 items-center"
    >
      {/* LEFT SIDE */}
      <div>
        <span className="text-sky-400 uppercase tracking-[0.3em] text-sm">
          Contact
        </span>

        <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4 leading-tight">
          Parlons de votre projet.
        </h2>

        <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-lg">
          Vous avez une idée, une opportunité ou simplement envie d’échanger ?
          Je suis toujours ouverte aux nouvelles collaborations autour du
          développement logiciel, des applications web et des technologies Java.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="https://github.com/xpatk"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              hover:border-sky-500/40
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            GitHub ↗
          </a>

          <a
            href="mailto:votre@email.com"
            className="
              px-6
              py-3
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              hover:border-sky-500/40
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            Email
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-md
          p-8
          lg:p-10
        "
      >
        {emailSubmitted ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Message envoyé ✓
            </h3>

            <p className="text-gray-400">
              Merci pour votre message. Je vous répondrai dès que possible.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-2"
              >
                Email
              </label>

              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="jean@email.fr"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-sky-500/50
                "
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-gray-300 mb-2"
              >
                Sujet
              </label>

              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-white
                  focus:outline-none
                  focus:border-sky-500/50
                "
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="Votre message..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-3
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-sky-500/50
                "
              />
            </div>

            <button
              type="submit"
              className="
                mt-2
                rounded-xl
                py-4
                font-medium
                text-white
                bg-gradient-to-r
                from-sky-500
                to-cyan-500
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Envoyer le message
            </button>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="invisible"
              badge="inline"
            />

            {captchaError && (
              <p className="text-red-500 text-sm">
                Veuillez vérifier le reCAPTCHA.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;