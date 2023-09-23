import React from "react";
import { ButtonProps } from "../types";
import classNames from "classnames";
import _ from "lodash";
const Button: React.FC<ButtonProps> = ({ style = "primary", text = "Button", onClick }): JSX.Element => {
    return (
        <button
            data-testid="button"
            className={classNames({
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full": _.isEqual(style, "primary"),
                "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full": _.isEqual(style, "secondary"),
                "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full": _.isEqual(style, "danger"),
            })}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
