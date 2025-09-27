import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import PublishIcon from "@mui/icons-material/Publish";
import UpcomingIcon from "@mui/icons-material/Upcoming";

import CardInfoCard from "../../ui/CardInfoCard";
import CustomTable from "../../ui/Table";
import CardItem from "../../ui/CardItem";

const columns = [
  { id: "id", label: "ID" },
  { id: "ActiveCoupons", label: "Active Coupons" },
  { id: "UpcomingCoupons", label: "Upcoming Coupons" },
];

const rows = [
  { id: 1, ActiveCoupons: "BLACKFRIDAY", UpcomingCoupons: "WINTERSALE" },
  { id: 2, ActiveCoupons: "CYBERMONDAY", UpcomingCoupons: "SPRINGSALE" },
  { id: 3, ActiveCoupons: "NEWYEAR", UpcomingCoupons: "SUMMERSALE" },
  { id: 4, ActiveCoupons: "SUMMERSALE", UpcomingCoupons: "WINTERDEAL" },
  { id: 5, ActiveCoupons: "WINTERDEAL", UpcomingCoupons: "FREESHIP" },
  { id: 6, ActiveCoupons: "FREESHIP", UpcomingCoupons: "BUY1GET1" },
  { id: 7, ActiveCoupons: "BUY1GET1", UpcomingCoupons: "SPRINGSALE" },
  { id: 8, ActiveCoupons: "SPRINGSALE", UpcomingCoupons: "SUMMERSALE" },
  { id: 9, ActiveCoupons: "FLASHSALE", UpcomingCoupons: "WINTERDEAL" },
  { id: 10, ActiveCoupons: "HOLIDAY20", UpcomingCoupons: "FREESHIP" },
  { id: 11, ActiveCoupons: "WAFR2024", UpcomingCoupons: "BUY1GET1" },
  { id: 12, ActiveCoupons: "EXTRA10", UpcomingCoupons: "SPRINGSALE" },
  { id: 13, ActiveCoupons: "SAVE15", UpcomingCoupons: "SUMMERSALE" },
  { id: 14, ActiveCoupons: "DISCOUNT5", UpcomingCoupons: "WINTERDEAL" },
  { id: 15, ActiveCoupons: "SPECIALOFFER", UpcomingCoupons: "FREESHIP" },
];

export default function Analytics() {
  return (
    <div className="analytics-page">
      <h2>Analytics Overview</h2>
      <div className="flex justify-evenly gap-6 mt-7 w-full">
        <CardInfoCard
          title="Total Used Coupons"
          value="60"
          color={"#58B05C"}
          icon={<DomainVerificationIcon sx={{ fontSize: 40 }} />}
        />
        <CardInfoCard
          title="Total Active Coupons"
          value="30"
          color={"#E73673"}
          icon={<PublishIcon sx={{ fontSize: 40 }} />}
        />
        <CardInfoCard
          title="Total Upcoming Coupons"
          value="1,234"
          color={"#3A93EE"}
          icon={<UpcomingIcon sx={{ fontSize: 40 }} />}
        />
      </div>
      <div className="cards-container">
        <div className="bigCard">
          <h4 className="mb-4">Coupons Details</h4>
          <CardItem title="Total" value="60" logoURL="/path/to/logo1.png" />
        </div>
        <div className="smallCard">
          <h4 className="mb-4">Coupons Summary</h4>
        </div>
      </div>

      {/* {<div className="table-container">
        <CustomTable columns={columns} rows={rows} />
        <CustomTable columns={columns} rows={rows} />
      </div>} */}
    </div>
  );
}
