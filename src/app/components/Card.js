import React from "react";

export default function Card({ image, category, title, description }) {
  return (

    <div className="flex w-96 flex-col bg-secondary shadow-2xl text-white justify-center rounded-2xl">
      <img
        className="aspect-video w-96 rounded-t-2xl object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <small className="text-white text-xs">{category}</small>
        <h1 className="text-2xl font-medium text-slate-600 pb-2">{title}</h1>
        <p className="text-sm tracking-tight font-light  leading-6">{description}</p>
      </div>
    </div>
  );
}
