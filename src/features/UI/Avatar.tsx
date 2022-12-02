import React from "react";

type PropType = {
  src: string;
};

export default function Avatar({ src }: PropType) {
  return (
    <div className="h-12 w-12">
      <img src={src} alt="avatar" />
    </div>
  );
}