import "./style.css";

const Button = ({ text = "Button" }) => {
  return <button className="button">{text}</button>;
};

export { Button };
