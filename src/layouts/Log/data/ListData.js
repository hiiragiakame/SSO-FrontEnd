import SoftTypography from "components/SoftTypography";
import useData from "./data";

export default function ListData() {
  const { data } = useData();
  return {
    columns: [
      { name: "STT", align: "center" },
      { name: "MÃ_NHÂN_VIÊN", align: "center" },
      { name: "TÊN_NGƯỜI_DÙNG", align: "center" },
      { name: "ĐỊA_CHỈ_IP", align: "center" },
      { name: "TÁC_NHÂN", align: "center" },
      { name: "NỘI_DUNG", align: "center" },
      { name: "THỜI_GIAN", align: "center" },
    ],

    rows: data.map((item, index) => ({
      STT: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {index + 1}
        </SoftTypography>
      ),
      MÃ_NHÂN_VIÊN: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.MÃ_NHÂN_VIÊN}
        </SoftTypography>
      ),
      TÊN_NGƯỜI_DÙNG: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.TÊN_NGƯỜI_DÙNG}
        </SoftTypography>
      ),
      ĐỊA_CHỈ_IP: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.ĐỊA_CHỈ_IP}
        </SoftTypography>
      ),
      TÁC_NHÂN: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.TÁC_NHÂN}
        </SoftTypography>
      ),
      NỘI_DUNG: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.NỘI_DUNG}
        </SoftTypography>
      ),
      THỜI_GIAN: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {item.THỜI_GIAN}
        </SoftTypography>
      ),
    })),
  };
}
