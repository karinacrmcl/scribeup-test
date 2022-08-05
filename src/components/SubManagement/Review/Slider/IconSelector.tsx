import React from "react";
import icon from "../../../../assets/slider/default.png";

type Props = {
  id: string;
};

export function IconSelector({ id }: Props) {
  switch (id) {
    case "default":
      return <img src={icon} alt="card-logo" />;
    default:
      return null;
  }
}
