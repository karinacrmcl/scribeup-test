import React, { CSSProperties, ReactNode } from "react";
import s from "./Button.module.scss";

type Props = {
  children: ReactNode;
  styles?: CSSProperties;
  onClick: () => void;
};

export default function Button({ children, styles, onClick }: Props) {
  return (
    <button className={s.button_container} style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
