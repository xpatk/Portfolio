"use client";

import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className="relative"
    >
      <motion.div
        animate={{
          backgroundColor: active
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0)",
          borderColor: active
            ? "rgba(56,189,248,0.4)"
            : "rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.25 }}
        className="
          px-5
          py-2.5
          rounded-full
          border
          backdrop-blur-md
        "
      >
        <span
          className={`
            text-sm
            font-medium
            transition-colors
            ${
              active
                ? "text-white"
                : "text-gray-400"
            }
          `}
        >
          {children}
        </span>
      </motion.div>

      {active && (
        <motion.div
          layoutId="active-pill"
          className="
            absolute
            inset-0
            rounded-full
            border
            border-sky-400/20
            shadow-[0_0_20px_rgba(56,189,248,0.2)]
            pointer-events-none
          "
        />
      )}
    </button>
  );
};

export default TabButton;