'use client';
import React, { useState } from "react";

export default function References() {
  const [showAll, setShowAll] = useState(false);
  const references = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Örnek referanslar
  const displayedReferences = showAll ? references : references.slice(0, 8);
  
  return (
    <div className="flex min-h-screen items-center justify-center px-24">
      <div>
        <div className="group relative -ml-4 flex scroll-mt-40 items-center pl-4">
          <a
            href="#"
            className="absolute z-50 -ml-10 mb-2.5 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 p-1 opacity-0 hover:opacity-100 group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              aria-hidden="true"
              className="pointer-events-none h-3.5 w-3.5 rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
              />
            </svg>
          </a>
          <h2 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug mb-2 text-primary">
            Referanslarımız ve İş Ortaklarımız
          </h2>
        </div>
        <p className="block antialiased font-sans text-base leading-relaxed mb-4 text-gray-600">
          Çalıştığımız saygın firmalar ve kurumsal iş ortaklarımız. Kaliteli hizmet ve güvenilir çözümler için büyük markalarla iş birliği yapıyoruz.
        </p>
        <div
          className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4"
          id="frameworks-integration"
        >
          {/* Example reference cards, replace with your own as needed */}

          {displayedReferences.map((i) => (
            <a
              key={i}
              className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25"
              href="#"
            >
              <span className="my-6 grid h-24 w-24 place-items-center">
                {/* SVG or image here */}
                <svg
                  className="mx-auto"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.788 14.842h6.865v.557h-6.235v4.189h5.864v.557h-5.864v4.599h6.307v.557h-6.937V14.842zm7.48 0h.73l3.232 4.6 3.304-4.6L30.028 9l-7.383 10.925L26.45 25.3h-.758l-3.462-4.893-3.475 4.893h-.744l3.833-5.376-3.575-5.083zm8.454.557v-.557h7.823v.557h-3.604V25.3h-.63v-9.902h-3.59zm-24.523-.557h.787L13.833 31.4l-4.482-6.1-6.494-9.667-.029 9.668H2.2V14.842zm32.283 9.734a.225.225 0 01-.225-.233.225.225 0 11.45 0 .224.224 0 01-.225.233zm.618-.613h.337c.005.186.138.311.334.311.219 0 .343-.134.343-.386v-1.594h.342v1.596c0 .453-.257.714-.682.714-.4 0-.674-.253-.674-.64zm1.805-.02h.34c.029.214.234.35.53.35.275 0 .477-.145.477-.345 0-.172-.129-.276-.421-.346l-.285-.07c-.4-.096-.582-.293-.582-.624 0-.402.322-.67.804-.67.448 0 .776.268.796.648h-.334c-.032-.208-.21-.338-.467-.338-.27 0-.451.133-.451.336 0 .161.116.254.404.322l.243.061c.453.108.64.296.64.635 0 .432-.328.702-.85.702-.49 0-.82-.258-.844-.661z"
                    fill="#000"
                  ></path>
                </svg>
              </span>
            </a>
          ))}
          {references.length > 8 && !showAll && (
            <button
              className="col-span-2 md:col-span-4 mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              onClick={() => setShowAll(true)}
            >
              Tümünü Gör
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
