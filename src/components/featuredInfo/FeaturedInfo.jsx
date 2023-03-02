import React from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,600</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,200</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,000</span>
          <span className="featuredMoneyRate">
            +4.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  );
}
