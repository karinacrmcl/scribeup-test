import React from "react";
import s from "./Advantages.module.scss";

type Advantage = {
    accent: string;
    description: string;
    icon: string;
    id: number;
}

type Props = {
items: Advantage[];
}

export function SubAdvantages({items}: Props) {
return <div className={s.advantages_container}>
    {items.map((item: Advantage)=>{
        return <div className={s.advantages_item}> 
<img src={item.icon} alt={item.icon} className={s.advantages_icon}/>
<p className={s.advantages_text}> <span className={s.advantages_accent}>{item.accent}</span>{item.description}</p>
</div>
    })}
</div>
}