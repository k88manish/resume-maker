import React from "react";

const center_class_string =
  "top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4";

export default function Modal() {
  return (
    <>
      <div
        data-id="overlay"
        className={`z-0 ${center_class_string} absolute h-full w-full bg-zinc-700/50`}
      />
      <div className="fixed top-2/4 left-2/4">Modal</div>
    </>
  );
}
