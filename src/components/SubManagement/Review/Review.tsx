import React from "react";
import { useMediaQuery } from "react-responsive";
import { subAdvantages } from "../../../constants/subAdvantages";
import { Tab } from "../../../layouts/Tab/Tab";
import { subs } from "../../../mocks/subscriptions";
import { subsInfo } from "../../../mocks/subsInfo";
import Button from "../../UI/Button/Button";
import UISvgSelector from "../../UI/UISvgSelector";
import { SubAdvantages } from "./Advantages/Advantages";
import { SubBill } from "./Bill/Bill";
import s from "./Review.module.scss";
import Slider from "./Slider/Slider";

type Props = {};

export default function Review({}: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 875px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 400px)" });
  const btnStyles = { background: "#d3d3d3", height: "45px" };
  const mobileStyles = isSmallMobile
    ? {
        background: "none",
        width: "90px",
        height: "30px",
        position: "absolute" as const,
        right: "20px",
        top: "5px",
        alignItems: "flex-end",
      }
    : isMobile
    ? {
        background: "#5D5FEF",
        width: "90px",
        height: "30px",
        position: "absolute" as const,
        right: "20px",
        top: "5px",
      }
    : {};

  return (
    <Tab title="Let’s review your subscriptions">
      <div className={s.review_container}>
        <div className={s.review_blocks}>
          <SubBill primarySubs={subs} cancelledSubs={null} />
          <Slider items={subsInfo} />
          <SubAdvantages items={subAdvantages} />
        </div>
        <Button
          onClick={() => console.log()}
          styles={{ ...btnStyles, ...mobileStyles }}
        >
          <div className={s.review_button}>
            <p>
              {!isMobile && "See My"} {!isSmallMobile && "New"} Bill
            </p>
            <UISvgSelector id="forward-arrow" />
          </div>
        </Button>
        {isMobile ? null : (
          <div className={s.review_footer}>
            Questions?<span> Contact Support</span>
          </div>
        )}
      </div>
    </Tab>
  );
}
