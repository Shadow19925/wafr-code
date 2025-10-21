import Filter from "../../ui/Filter";
import Table from "../../ui/Table";
import CustomButton from "../../ui/CustomButton";
import partners from "../../assets/images/Partners";
export default function StoresManagement() {
  return (
    <div className="analytics-page">
      <Filter>
        <Filter.Title>Store Management</Filter.Title>
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
              { id: "name", label: "Store Name" },
              { id: "location", label: "Location" },
              { id: "createdAt", label: "Created At" },
              { id: "status", label: "Status" },
              { id: "actions", label: "Actions" },
            ]}
            rows={partners.map((partner, index) => ({
              id: index,
              image: <img src={partner.image} alt={partner.name} width="50" />,
              name: partner.name,
              location: "Dammam, Saudi Arabia",
              createdAt: "2023-01-01",
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
              Add Store
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
