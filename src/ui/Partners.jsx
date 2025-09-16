import partners from "../assets/images/Partners";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lanyard from "./Lanyard.jsx";
export default function Partners() {
  return (
    <div className="our-partners">
      <Lanyard position={[0, 0, 12]} fov={20} gravity={[0, -40, 0]} />
      <div className="partners-image">
        <ImageList cols={4} rowHeight={150} gap={30} sx={{ width: "100%" }}>
          {partners.map((logo, index) => (
            <ImageListItem
              key={index}
              sx={{
                height: "150px", // ensures the item is the same as rowHeight
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo.image}
                alt={logo.name}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  background: "#F9FAFB",
                  display: "block",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
