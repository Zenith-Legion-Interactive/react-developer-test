import "../Button.css";

const Button = ({children, styleType, onClick}) => {
  // const classNames = `button ${styleType}`;
  const classNames = `border border-hotPinkColor text-hotPinkColor text-3xl px-6 py-4 cursor-pointer hover:border-slimeGreenColor hover:text-slimeGreenColor`;

  return (
    <button style={{margin: "5px"}} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
