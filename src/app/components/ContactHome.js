import React from "react";

export default function ContactHome() {
  return (
    <div className="flex items-center justify-between py-8 px-4">
      <span className="text-2xl font-bold text-gray-800">Güncel Haberler</span>
      <a className="flex items-center ml-10 gap-2 text-2xl text-green-300 underline cursor-pointer group">
        Tüm Haberler
        <svg
          className="w-6 h-6 text-green-20 group-hover:text-green-400 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
