// @mui material components
// import Tooltip from "@mui/material/Tooltip";

import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";
// import SoftAvatar from "components/SoftAvatar";
// import SoftProgress from "components/SoftProgress";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function ListData() {
  //   const avatars = (members) =>
  //     members.map(([image, name]) => (
  //       <Tooltip key={name} title={name} placeholder="bottom">
  //         <SoftAvatar
  //           src={image}
  //           alt="name"
  //           size="xs"
  //           sx={{
  //             border: ({ borders: { borderWidth }, palette: { white } }) =>
  //               `${borderWidth[2]} solid ${white.main}`,
  //             cursor: "pointer",
  //             position: "relative",

  //             "&:not(:first-of-type)": {
  //               ml: -1.25,
  //             },

  //             "&:hover, &:focus": {
  //               zIndex: "10",
  //             },
  //           }}
  //         />
  //       </Tooltip>
  //     ));

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

    rows: [
      {
        STT: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            1
          </SoftTypography>
        ),
        MÃ_NHÂN_VIÊN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            NV001
          </SoftTypography>
        ),
        TÊN_NGƯỜI_DÙNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 1
          </SoftTypography>
        ),
        ĐỊA_CHỈ_IP: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            192.168.0.0
          </SoftTypography>
        ),
        TÁC_NHÂN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Người dùng
          </SoftTypography>
        ),
        NỘI_DUNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 001 đăng nhập
          </SoftTypography>
        ),
        THỜI_GIAN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            26/05/2023 07:00 PM
          </SoftTypography>
        ),
      },
      {
        STT: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            2
          </SoftTypography>
        ),
        MÃ_NHÂN_VIÊN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            NV002
          </SoftTypography>
        ),
        TÊN_NGƯỜI_DÙNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 2
          </SoftTypography>
        ),
        ĐỊA_CHỈ_IP: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            192.168.0.1
          </SoftTypography>
        ),
        TÁC_NHÂN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Người dùng
          </SoftTypography>
        ),
        NỘI_DUNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 002 đăng nhập
          </SoftTypography>
        ),
        THỜI_GIAN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            26/05/2023 07:00 PM
          </SoftTypography>
        ),
      },
      {
        STT: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            3
          </SoftTypography>
        ),
        MÃ_NHÂN_VIÊN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            NV003
          </SoftTypography>
        ),
        TÊN_NGƯỜI_DÙNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 3
          </SoftTypography>
        ),
        ĐỊA_CHỈ_IP: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            192.168.0.2
          </SoftTypography>
        ),
        TÁC_NHÂN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Người dùng
          </SoftTypography>
        ),
        NỘI_DUNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 003 đăng nhập
          </SoftTypography>
        ),
        THỜI_GIAN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            26/05/2023 07:00 PM
          </SoftTypography>
        ),
      },
      {
        STT: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            4
          </SoftTypography>
        ),
        MÃ_NHÂN_VIÊN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            NV004
          </SoftTypography>
        ),
        TÊN_NGƯỜI_DÙNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 4
          </SoftTypography>
        ),
        ĐỊA_CHỈ_IP: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            192.168.0.3
          </SoftTypography>
        ),
        TÁC_NHÂN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Người dùng
          </SoftTypography>
        ),
        NỘI_DUNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 004 đăng nhập
          </SoftTypography>
        ),
        THỜI_GIAN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            26/05/2023 07:00 PM
          </SoftTypography>
        ),
      },
      {
        STT: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            5
          </SoftTypography>
        ),
        MÃ_NHÂN_VIÊN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            NV005
          </SoftTypography>
        ),
        TÊN_NGƯỜI_DÙNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 5
          </SoftTypography>
        ),
        ĐỊA_CHỈ_IP: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            192.168.0.4
          </SoftTypography>
        ),
        TÁC_NHÂN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Người dùng
          </SoftTypography>
        ),
        NỘI_DUNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 005 đăng nhập
          </SoftTypography>
        ),
        THỜI_GIAN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            26/05/2023 07:00 PM
          </SoftTypography>
        ),
      },
      {
        STT: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            6
          </SoftTypography>
        ),
        MÃ_NHÂN_VIÊN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            NV006
          </SoftTypography>
        ),
        TÊN_NGƯỜI_DÙNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 6
          </SoftTypography>
        ),
        ĐỊA_CHỈ_IP: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            192.168.0.5
          </SoftTypography>
        ),
        TÁC_NHÂN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Người dùng
          </SoftTypography>
        ),
        NỘI_DUNG: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Nhân viên 006 đăng nhập
          </SoftTypography>
        ),
        THỜI_GIAN: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            26/05/2023 07:00 PM
          </SoftTypography>
        ),
      },
    ],
  };
}
