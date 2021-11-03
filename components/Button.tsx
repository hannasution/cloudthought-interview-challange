import type { NextPage } from "next";

interface ButtonProps {
  onClick: () => void;
  type?: "dead";
}

const Button: NextPage<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <>
      <button onClick={onClick} className={`pushable ${type}`}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">{children}</span>
      </button>
    </>
  );
};

export default Button;
