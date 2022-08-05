import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Transition } from "react-transition-group";
import UISvgSelector from "../../../components/UI/UISvgSelector";
import { TransitionWrapper } from "../../../layouts/Transition/Transition";
import s from "./NavBar.module.scss";

type Tab = "review" | "management";

type Props = {
  activeTab: Tab;
  onClick: (tab: Tab) => void;
  onScroll: number;
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

export function NavBar({ activeTab, onClick, onScroll }: Props) {
  const tabs = [
    { value: "Review Subscriptions", name: "review", id: 1 },
    { value: "Add & Cancel Subscriptions 🔒", name: "management", id: 2 },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 875px)" });

  useEffect(() => {
    setIsOpen(false);
  }, [onScroll]);

  return (
    <div className={s.navbar_container}>
      {isMobile ? (
        <>
          <div
            className={s.navbar_activetab}
            onClick={() => setIsOpen(!isOpen)}
          >
            {tabs.find((item) => item.name === activeTab)?.value}
            <button
              style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
              className={s.navbar_menubtn}
            >
              <UISvgSelector id="down-arrow" />
            </button>
          </div>
          <TransitionWrapper inState={isOpen}>
            <div className={s.navbar_menu}>
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
          </TransitionWrapper>
        </>
      ) : (
        <>
          {tabs.map((item) => (
            <Tab
              key={item.id}
              active={activeTab === item.name}
              value={item.value}
              name={item.name as Tab}
              onClick={() => onClick(item.name as Tab)}
            />
          ))}
        </>
      )}
    </div>
  );
}
