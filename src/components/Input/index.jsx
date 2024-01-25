import "./style.css";

const Input = ({ label, placeholder, isTextarea }) => {
  return (
    <div className="input">
      <label className="input__text">{label}</label>
      {isTextarea ? (
        <textarea className="textarea__box" placeholder={placeholder} />
      ) : (
        <input className="input__box" placeholder={placeholder} />
      )}
    </div>
  );
};

export { Input };
