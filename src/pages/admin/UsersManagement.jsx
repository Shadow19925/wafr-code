import Filter from "../../ui/Filter";
import Table from "../../ui/Table";
import CustomButton from "../../ui/CustomButton";

export default function UsersManagement() {
  return (
    <div className="analytics-page">
      <Filter>
        <Filter.Title>User Management</Filter.Title>
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
              { id: "name", label: "Name" },
              { id: "email", label: "Email" },
              { id: "role", label: "Role" },
              { id: "status", label: "Status" },
              { id: "actions", label: "Actions" },
            ]}
            rows={[
              {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                role: "Admin",
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
              },
              {
                id: 2,
                name: "Jane Smith",
                email: "jane@example.com",
                role: "User",
                status: "Inactive",
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
              },
            ]}
          />
          <div>
            <CustomButton size={"large"} variation={"primary"} className="mt-4">
              Add User
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
