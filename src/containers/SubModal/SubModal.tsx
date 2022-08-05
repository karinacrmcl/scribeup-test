import React, { useState } from "react";
import Management from "../../components/SubManagement/Management/Management";
import Review from "../../components/SubManagement/Review/Review";
import { NavBar } from "./NavBar/NavBar";
import s from "./SubModal.module.scss";

type Props = {
  defaultTab: "review" | "management";
};

function ActiveTab({ tab }: { tab: string }) {
  switch (tab) {
    case "review":
      return <Review />;
    case "management":
      return <Management />;
    default:
      return null;
  }
}

export function SubModal({ defaultTab }: Props) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const handleTabChange = (tab: "review" | "management") => {
    setActiveTab(tab);
  };

  return (
    <div className={s.submodal_container}>
      <NavBar activeTab={activeTab} onClick={handleTabChange} />
      <div className={s.submodal_content}>
        <ActiveTab tab={activeTab} />
      </div>
    </div>
  );
}
