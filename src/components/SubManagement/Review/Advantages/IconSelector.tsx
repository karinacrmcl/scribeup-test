import React from "react";
import moneyWithWings from "../../../../assets/advantages/money-with-wings.png";
import joystick from "../../../../assets/advantages/joystick.png";
import noEntry from "../../../../assets/advantages/no-entry.png";
import flexedBiceps from "../../../../assets/advantages/flexed-biceps.png";
import bell from "../../../../assets/advantages/bell.png";

type Props = {
  id: string;
};

export function IconSelector({ id }: Props) {
  switch (id) {
    case "moneyWithWings":
      return <img src={moneyWithWings} alt={id} />;
    case "joystick":
      return <img src={joystick} alt={id} />;
    case "noEntry":
      return <img src={noEntry} alt={id} />;
    case "flexedBiceps":
      return <img src={flexedBiceps} alt={id} />;
    case "bell":
      return <img src={bell} alt={id} />;
    default:
      return null;
  }
}
