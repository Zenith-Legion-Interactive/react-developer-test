import React, { FunctionComponent, memo, useMemo } from "react";
import helpers from "../../helpers";

/**
 * Button props
 */
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "warning" | "danger" | "info" | "primary" | "secondary";
}

/**
 * Button Component
 */
const Button: FunctionComponent<Props> = memo(
  ({ className, color, ...props }) => {
    const generatedClassName = useMemo<string | undefined>(() => {
      const classNamesParams: string[] = ["btn"];
      if (className) {
        classNamesParams.push(className);
      }
      if (color === "danger") {
        classNamesParams.push("btn-danger");
      } else if (color === "warning") {
        classNamesParams.push("btn-warning");
      } else if (color === "info") {
        classNamesParams.push("btn-info");
      } else if (color === "secondary") {
        classNamesParams.push("btn-secondary");
      } else {
        classNamesParams.push("btn-primary");
      }

      return helpers.className(...classNamesParams);
    }, [className, color]);

    return <button className={generatedClassName} {...props} />;
  }
);

export default Button;
