// import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import { IconButton } from "@mui/material";
// import ViewData from "./ViewData";

export default function IconActions({
  item,
  onViewDetails,
  onEditDetails,
  onDeleteDetails,
  onLockDetails,
  handleSelectedRow,
}) {
  // const [openviewThongTin, setViewThongTin] = useState(false);
  const iconStyle = {
    fontSize: 20,
    marginRight: 8,
    color: "blue",
    cursor: "pointer",
  };
  // const handleViewThongTin = () => {
  //   setViewThongTin(!openviewThongTin);
  // };
  const handleIcon = () => {
    handleSelectedRow(item);
  };
  return [
    <IconButton
      onClick={() => {
        onViewDetails(item);
        handleIcon();
      }}
    >
      <VisibilityIcon key={`${item.MÃ_ỨNG_DỤNG}-visibility-icon`} style={iconStyle} />
    </IconButton>,
    <IconButton
      onClick={() => {
        onEditDetails(item);
        handleIcon();
      }}
    >
      <EditIcon key={`${item.MÃ_ỨNG_DỤNG}-edit-icon`} style={iconStyle} />
    </IconButton>,
    <IconButton
      onClick={() => {
        onDeleteDetails(item);
        handleIcon();
      }}
    >
      <DeleteIcon key={`${item.MÃ_ỨNG_DỤNG}-delete-icon`} style={iconStyle} />
    </IconButton>,
    <IconButton
      onClick={() => {
        onLockDetails(item);
        handleIcon();
      }}
    >
      <LockIcon key={`${item.MÃ_ỨNG_DỤNG}-lock-icon`} style={iconStyle} />
    </IconButton>,
  ];
}
