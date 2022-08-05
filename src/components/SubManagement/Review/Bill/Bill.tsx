import React from "react";
import { Subscription } from "../../../../@types/Subscription";
import s from "./Bill.module.scss";

type BillItem = {
    title: string;
    asset?: string;
    description?: string;
    amount: number;
}

type Props = {
primarySubs: Subscription[] | null;
rewardsValue?: number;
cancelledSubs: Subscription[] | null;
}
//maybe remove specifying classes from h3-5
function BillItem ({title, asset, description, amount}:BillItem) {
return <div className={s.bill_item}>
  <div className={s.bill_content}>
     <h5 className={s.bill_item_title}>{title}</h5>
{description && <p className={s.bill_item_description}>{description}</p>}
{asset && <span className={s.bill_item_asset}>{asset}</span>}
    </div> 
    <div className={s.bill_item_value}>-&nbsp;${amount}</div>
</div>
}

export function SubBill ({primarySubs, rewardsValue, cancelledSubs }:Props) {

const monthlyBill = primarySubs?.reduce((n, {value}) => n + value, 0) || 0
const cancelledSum = cancelledSubs?.reduce((n, {value}) => n + value, 0) || 0
const newBill = monthlyBill - cancelledSum

return <div className={s.bill_container}>
    <div className={s.bill_primary}>
        <div className={s.bill_content}>
            <h3 className={s.bill_primary_title}>Monthly Bill</h3>
            <p className={s.bill_primary_asset}>{primarySubs?.length || 0} subscriptions </p>
        </div>
        <div className={s.bill_primary_value}>${monthlyBill}</div>
    </div>
    <div className={s.bill_items}>
        <BillItem asset="How do ScribeUp Rewards work?" description="5% off, up to $10/month" title={"ScribeUp Rewards"} amount={rewardsValue || 0}  />
   <BillItem title="Cancelled Subs" description={`${cancelledSubs?.length || 0} subscriptions`} amount={cancelledSum || 0} />
    </div>
</div>
}