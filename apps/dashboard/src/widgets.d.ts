declare module "Widgets/Button" {
  import React from "react";
  import { ButtonProps } from "widgets/src/components/Button";

  declare const Button: React.FC<ButtonProps>;
  export default Button;
}
