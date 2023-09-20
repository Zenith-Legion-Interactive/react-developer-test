import "../Button.css";

const Button = ({children, styleType, onClick}) => {
  const classNames = `button ${styleType}`;

  return (
    <button style={{margin: "5px"}} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
