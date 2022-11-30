import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export default function useModal() {
  const { isModal, setIsModal } = useContext(ModalContext);

  function toggleModal() {
    setIsModal(!isModal);
  }

  return { isModal, toggleModal };
}
