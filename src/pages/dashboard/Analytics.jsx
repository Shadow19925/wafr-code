import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import PublishIcon from "@mui/icons-material/Publish";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import partners from "../../assets/images/Partners";

import CardInfoCard from "../../ui/CardInfoCard";
//import CustomTable from "../../ui/Table";
import CouponDetails from "../../ui/CouponDetails";
import Filter from "../../ui/Filter";

export default function Analytics() {
  return (
    <div className="analytics-page">
      <Filter>
        <Filter.Title>Analytics</Filter.Title>
      </Filter>
      <div className="top-cards">
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
          <h4 className="mb-4">Active Coupons </h4>
          {partners.map((logo, index) => (
            <CouponDetails
              key={index}
              StoreName={logo.name}
              discount={"50%"}
              storeIcon={logo.image}
            />
          ))}
        </div>
        <div className="smallCard">
          <h4 className="mb-4"> upcoming Coupons </h4>
          {partners.map((logo, index) => (
            <CouponDetails
              key={index}
              StoreName={logo.name}
              discount={"will  be available soon"}
              storeIcon={logo.image}
            />
          ))}
        </div>
      </div>

      {/* {<div className="table-container">
        <CustomTable columns={columns} rows={rows} />
        <CustomTable columns={columns} rows={rows} />
      </div>} */}
    </div>
  );
}
