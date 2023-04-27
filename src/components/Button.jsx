import "./Button.scss";

// eslint-disable-next-line react/prop-types
const Button = ({ label, number, className, onClick }) => {


  return (
    <button onClick={onClick} className={className}>
      <a>
        {number}
      </a>
      {label}
    </button>
  );
};

export default Button;