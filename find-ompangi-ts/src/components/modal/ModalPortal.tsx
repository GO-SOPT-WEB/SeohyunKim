import { ReactNode } from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, el as HTMLElement);
};

export default ModalPortal;
