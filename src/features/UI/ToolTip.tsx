import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

interface iProps {
  children: JSX.Element;
  title: string;
  placement: any;
}

export default function Tooltip({ children, title, placement }: iProps) {
  return (
    <Tippy
      className="hidden md:block"
      content={
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {title}
        </span>
      }
      arrow={true}
      theme="light"
      animation="scale"
      placement={placement}
    >
      {children}
    </Tippy>
  );
}
