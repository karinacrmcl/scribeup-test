import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import UISvgSelector from "../../components/UI/UISvgSelector";
import s from "./Tab.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};

export function Tab({ children, title }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 875px)" });

  return (
    <div className={s.tab_container}>
      <button className={s.tab_button}>
        <UISvgSelector id="back-arrow" />
        {isMobile ? "Back" : "Back to Dashboard"}
      </button>
      <h3 className={s.tab_title}>{title}</h3>
      <div className={s.tab_content}>{children}</div>
    </div>
  );
}
