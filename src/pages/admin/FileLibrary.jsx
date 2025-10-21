import Filter from "../../ui/Filter";
import Table from "../../ui/Table";
import CustomButton from "../../ui/CustomButton";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import AspectRatioRoundedIcon from "@mui/icons-material/AspectRatioRounded";
export default function FileLibrary() {
  return (
    <div className="analytics-page">
      <Filter>
        <Filter.Title>File Library</Filter.Title>
        <Filter.Options>
          <Filter.SearchBar
            onSearch={(term) => console.log("Searching for:", term)}
          />
          <Filter.Sort onSort={() => console.log("Sorting files...")} />
        </Filter.Options>
      </Filter>
      <div className="data-grid-page">
        <div className="data-grid-container">
          <Table
            columns={[
              { id: "fileName", label: "File Name" },
              { id: "fileSize", label: "File Size" },
              { id: "fileType", label: "File Type" },
              { id: "description", label: "Description" },
              { id: "uploadedDate", label: "Uploaded Date" },
              { id: "actions", label: "Actions" },
            ]}
            rows={[
              {
                id: 1,
                fileName: " Document1.pdf",
                fileSize: "1 MB",
                fileType: <PictureAsPdfRoundedIcon />,
                uploadedDate: "2023-01-01",
                actions: (
                  <div className="">
                    <CustomButton size={"small"}>
                      <SaveAltRoundedIcon />
                    </CustomButton>{" "}
                    |{" "}
                    <CustomButton size={"small"} variation={"danger"}>
                      <DeleteRoundedIcon />
                    </CustomButton>
                  </div>
                ),
              },
              {
                id: 2,
                fileName: " Image1.png",
                fileSize: "500 KB",
                fileType: <AspectRatioRoundedIcon />,
                uploadedDate: "2023-02-15",
                actions: (
                  <div className="">
                    <CustomButton size={"small"}>
                      <SaveAltRoundedIcon />
                    </CustomButton>{" "}
                    |{" "}
                    <CustomButton size={"small"} variation={"danger"}>
                      <DeleteRoundedIcon />
                    </CustomButton>
                  </div>
                ),
              },
              {
                id: 2,
                fileName: " Image1.png",
                fileSize: "500 KB",
                fileType: "Image",
                uploadedDate: "2023-02-15",
                actions: (
                  <div className="">
                    <CustomButton size={"small"}>
                      <SaveAltRoundedIcon />
                    </CustomButton>{" "}
                    |{" "}
                    <CustomButton size={"small"} variation={"danger"}>
                      <DeleteRoundedIcon />
                    </CustomButton>
                  </div>
                ),
              },
            ]}
          />
          <div>
            <CustomButton size={"large"} variation={"primary"} className="mt-4">
              Upload New File
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
