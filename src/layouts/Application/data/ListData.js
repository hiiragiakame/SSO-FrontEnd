import { Icon } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import IconActions from "./IconActions";
import useData from "./data";

export default function ListData({
  handleViewDetails,
  handleEditDetails,
  handleDeleteDetails,
  handleLockDetails,
  handleSelectedRow,
}) {
  const { data } = useData();
  return {
    columns: [
      { name: "STT", align: "center" },
      { name: "MÃ ỨNG DỤNG", align: "center" },
      { name: "TÊN ỨNG DỤNG", align: "center" },
      { name: "MÔ TẢ", align: "center" },
      { name: "TRẠNG THÁI", align: "center" },
      { name: "", align: "center" },
    ],

    rows: data.map((item, index) => ({
      STT: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {index + 1}
        </SoftTypography>
      ),
      "MÃ ỨNG DỤNG": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.MÃ_ỨNG_DỤNG}
        </SoftTypography>
      ),
      "TÊN ỨNG DỤNG": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.TÊN_ỨNG_DỤNG}
        </SoftTypography>
      ),
      "MÔ TẢ": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.MÔ_TẢ}
        </SoftTypography>
      ),
      "TRẠNG THÁI": (
        <SoftBox
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: item.TRẠNG_THÁI ? "#F0FFF0" : "#FFE4E1",
          }}
        >
          <Icon style={{ marginRight: 8, marginBottom: 5 }}>
            <div style={{ color: item.TRẠNG_THÁI ? "green" : "red" }}>
              <FiberManualRecordIcon />
            </div>
          </Icon>
          <SoftTypography variant="caption" fontWeight="medium">
            <div style={{ color: item.TRẠNG_THÁI ? "green" : "red" }}>
              {item.TRẠNG_THÁI ? "Hoạt động" : "Khóa"}
            </div>
          </SoftTypography>
        </SoftBox>
      ),
      "": (
        <SoftBox>
          <IconActions
            item={item}
            onViewDetails={handleViewDetails}
            onEditDetails={handleEditDetails}
            onDeleteDetails={handleDeleteDetails}
            onLockDetails={handleLockDetails}
            handleSelectedRow={handleSelectedRow}
          />
        </SoftBox>
      ),
    })),
  };
}
