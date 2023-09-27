import "../Button.css";

const Button = ({children, styleType, action, onClick}) => {
  // const classNames = `button ${styleType}`;
  let className;

  switch (action) {
    case "increment":
      className = "px-3 py-2 bg-blue-400 mr-1 text-white font-semibold rounded";
      break;
    case "decrement":
      className = "px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded";
      break;
    default:
      className = "px-3 py-2 bg-gray-400 mr-1 text-white font-semibold rounded";
      break;
  }

  return (
    <button style={{margin: "5px"}} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
