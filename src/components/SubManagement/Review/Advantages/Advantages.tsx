import React from "react";
import SideBlock from "../../../../layouts/SideBlock/SideBlock";
import s from "./Advantages.module.scss";
import { IconSelector } from "./IconSelector";

type Advantage = {
  accent: string;
  description: string;
  icon: string;
  id: number;
};

type Props = {
  items: Advantage[];
};

export function SubAdvantages({ items }: Props) {
  return (
    <SideBlock title="why add to scribeup?">
      <div className={s.advantages_container}>
        {items.map((item: Advantage) => {
          return (
            <div className={s.advantages_item} key={item.id}>
              <div className={s.advantages_icon}>
                <IconSelector id={item.icon} />
              </div>
              <p className={s.advantages_text}>
                <span className={s.advantages_accent}>{item.accent}</span>&nbsp;
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SideBlock>
  );
}
