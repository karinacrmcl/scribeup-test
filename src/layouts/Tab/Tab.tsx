import React, { ReactNode } from "react";
import UISvgSelector from "../../components/UI/UISvgSelector";
import s from "./Tab.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};

export function Tab({ children, title }: Props) {
  return (
    <div className={s.tab_container}>
      <button className={s.tab_button}>
        <UISvgSelector id="back-arrow" />
        Back to Dashboard
      </button>
      <h3 className={s.tab_title}>{title}</h3>
      <div className={s.tab_content}>{children}</div>
    </div>
  );
}
