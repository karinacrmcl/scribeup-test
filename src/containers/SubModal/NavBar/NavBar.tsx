import classNames from "classnames";
import React from "react";
import s from "./NavBar.module.scss";

type Tab = "review" | "management";

type Props = {
  activeTab: Tab;
  onClick: (tab: Tab) => void;
};

function Tab({
  value,
  name,
  active,
  onClick,
}: {
  value: string;
  name: Tab;
  active: boolean;
  onClick: (tab: Tab) => void;
}) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <button
      className={classNames(s.navbar_tab, {
        [s.navbar_tab_active]: active,
      })}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export function NavBar({ activeTab, onClick }: Props) {
  const tabs = [
    { value: "Review Subscriptions", name: "review", id: 1 },
    { value: "Add & Cancel Subscriptions 🔒", name: "management", id: 2 },
  ];

  return (
    <div className={s.navbar_container}>
      {tabs.map((item) => (
        <Tab
          key={item.id}
          active={activeTab === item.name}
          value={item.value}
          name={item.name as Tab}
          onClick={() => onClick(item.name as Tab)}
        />
      ))}
    </div>
  );
}
