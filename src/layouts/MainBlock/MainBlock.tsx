import React, { ReactNode } from "react";
import s from "./MainBlock.module.scss";

type Props = { children: ReactNode };

export default function MainBlock({ children }: Props) {
  return (
    <div className={s.mainblock_container}>
      <div className={s.mainblock_content}>{children}</div>
    </div>
  );
}
