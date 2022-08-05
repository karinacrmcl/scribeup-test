import React, { ReactNode } from "react";
import s from "./SideBlock.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};

export default function SideBlock({ children, title }: Props) {
  return (
    <div className={s.sideblock_container}>
      <h5 className={s.sideblock_title}>{title}</h5>
      <div className={s.sideblock_content}>{children}</div>
    </div>
  );
}
