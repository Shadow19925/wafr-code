import Filter from "../../ui/Filter";
import Table from "../../ui/Table";
import partners from "../../assets/images/Partners";
import CustomButton from "../../ui/CustomButton";
export default function CouponsManagement() {
  return (
    <div className="analytics-page">
      <Filter>
        <Filter.Title> Coupons Management</Filter.Title>
        <Filter.Options>
          <Filter.SearchBar
            onSearch={(term) => console.log("Searching for:", term)}
          />
          <Filter.Icon />
        </Filter.Options>
      </Filter>
      <div className="data-grid-page">
        <div className="data-grid-container">
          <Table
            columns={[
              { id: "image", label: "Image" },
              { id: "store", label: "Store" },
              { id: "code", label: "Coupon Code" },
              { id: "discount", label: "Discount" },
              { id: "expiration", label: "Expiration Date" },
              { id: "status", label: "Status" },
              { id: "actions", label: "Actions" },
            ]}
            rows={partners.map((partner, index) => ({
              id: index,
              image: <img src={partner.image} alt={partner.name} width="50" />,
              store: partner.name,
              code: `SAVE${index + 10}`,
              discount: `${10 + index}%`,
              expiration: "2024-12-31",
              status: "Active",
              actions: (
                <div className="">
                  {" "}
                  <CustomButton size={"small"} variation={"primary"}>
                    Edit
                  </CustomButton>{" "}
                  |{" "}
                  <CustomButton size={"small"} variation={"danger"}>
                    Delete
                  </CustomButton>
                </div>
              ),
            }))}
          />
          <div>
            <CustomButton size={"large"} variation={"primary"} className="mt-4">
              Add Coupon
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
