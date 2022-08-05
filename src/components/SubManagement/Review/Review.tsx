import React from "react";
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
          styles={{ background: "#d3d3d3", height: "45px" }}
        >
          <div className={s.review_button}>
            <p>See My New Bill</p>
            <UISvgSelector id="forward-arrow" />
          </div>
        </Button>

        <div className={s.review_footer}>
          Questions?<span> Contact Support</span>
        </div>
      </div>
    </Tab>
  );
}
