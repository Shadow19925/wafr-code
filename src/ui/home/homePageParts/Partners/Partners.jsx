import partners from "../../../../assets/images/Partners";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lanyard from "./Lanyard.jsx";
export default function Partners() {
  return (
    <div className="">
      <div className="our-partners">
        <Lanyard position={[0, 0, 12]} fov={20} gravity={[0, -40, 0]} />
        <div className="partners-image">
          <ImageList cols={4} rowHeight={150} gap={30} sx={{ width: "100%" }}>
            {partners.map((logo, index) => (
              <ImageListItem key={index}>
                <img src={logo.image} alt={logo.name} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}
