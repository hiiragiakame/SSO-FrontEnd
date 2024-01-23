import SoftTypography from "components/SoftTypography";
import useData from "./data";

export default function ListData() {
  const { data } = useData();
  return {
    columns: [
      { name: "STT", align: "center" },
      { name: "MÃ NHÂN VIÊN", align: "center" },
      { name: "TÊN NGƯỜI DÙNG", align: "center" },
      { name: "ĐỊA CHỈ IP", align: "center" },
      { name: "TÁC NHÂN", align: "center" },
      { name: "NỘI DUNG", align: "center" },
      { name: "THỜI GIAN", align: "center" },
    ],

    rows: data.map((item, index) => ({
      STT: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {index + 1}
        </SoftTypography>
      ),
      "MÃ NHÂN VIÊN": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.MÃ_NHÂN_VIÊN}
        </SoftTypography>
      ),
      "TÊN NGƯỜI DÙNG": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.TÊN_NGƯỜI_DÙNG}
        </SoftTypography>
      ),
      "ĐỊA CHỈ IP": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.ĐỊA_CHỈ_IP}
        </SoftTypography>
      ),
      "TÁC NHÂN": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.TÁC_NHÂN}
        </SoftTypography>
      ),
      "NỘI DUNG": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.NỘI_DUNG}
        </SoftTypography>
      ),
      "THỜI GIAN": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.THỜI_GIAN}
        </SoftTypography>
      ),
    })),
  };
}
