// npm
import ReactDOM from "react-dom";

interface iProps {
  isModal: boolean;
  children: JSX.Element;
}

export const Modal = ({ isModal, children }: iProps) => {
  return isModal
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 bg-dark_500 bg-opacity-40 overflow-y-auto h-screen w-full backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center ">
          <div aria-modal aria-hidden tabIndex={-1} role="dialog">
            {children}
          </div>
        </div>,
        document.getElementById("portal")!
      )
    : null;
};
