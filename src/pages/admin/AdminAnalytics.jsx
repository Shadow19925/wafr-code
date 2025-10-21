import CardInfoCard from "../../ui/CardInfoCard";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SoapOutlinedIcon from "@mui/icons-material/SoapOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PieChart from "../../ui/PieActiveArc";
import Filter from "../../ui/Filter";
export default function AdminAnalytics() {
  return (
    <div className="analytics-page">
      <Filter>
        <Filter.Title>Admin Analytics</Filter.Title>
      </Filter>
      <div className="top-cards">
        <CardInfoCard
          title="Total Used Coupons"
          value="60"
          color={"#58B05C"}
          icon={<SoapOutlinedIcon sx={{ fontSize: 40 }} />}
        />
        <CardInfoCard
          title=" Active Coupons"
          value="30"
          color={"#E73673"}
          icon={<NotificationsActiveOutlinedIcon sx={{ fontSize: 40 }} />}
        />
        <CardInfoCard
          title=" Upcoming Coupons"
          value="1,234"
          color={"#3A93EE"}
          icon={<UpcomingIcon sx={{ fontSize: 40 }} />}
        />
        <CardInfoCard
          title="Total Registered Users"
          value="5,678"
          color={"#002fff"}
          icon={<PeopleAltOutlinedIcon sx={{ fontSize: 40 }} />}
        />
        <CardInfoCard
          title="Total Stores"
          value="1,234"
          color={"#ff5100"}
          icon={<StoreOutlinedIcon sx={{ fontSize: 40 }} />}
        />
      </div>
      <div className="cards-container">
        <div className="bigCard">
          <PieChart title=" By Coupons" />
        </div>
        <div className="smallCard">
          <PieChart
            title=" By store"
            data={[
              { id: 1, value: 12, label: "Active stores", color: "#E73673" },
              { id: 2, value: 30, label: "Inactive stores", color: "#58B05C" },
            ]}
          />
        </div>

        <div className="bigCard">
          <PieChart title=" By Coupons" />
        </div>
      </div>
    </div>
  );
}
