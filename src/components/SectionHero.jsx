import React from "react";

// import image
import gambar from "../assets/hero-illustration.png";

export default function SectionHero() {
  return (
    <div className="text-9xl my-20 text-center">
      <img src={gambar} alt="" />
      <img src="https://picsum.photos/200/200" alt="" />
      <img src="/vite.svg" alt="" />
    </div>
  );
}
