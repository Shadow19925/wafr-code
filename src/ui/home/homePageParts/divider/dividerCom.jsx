import { Divider } from "@mui/material";
export default function DividerCom() {
  return (
    <div className="divider">
      <div className="divider-circle"></div>
      <Divider className="divider-line" />
      <div className="divider-circle"></div>
    </div>
  );
}
