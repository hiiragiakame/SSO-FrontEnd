import { useState } from "react";

const useData = () => {
  const [data, setData] = useState([
    {
      STT: 1,
      MÃ_NHÂN_VIÊN: "NV001",
      TÊN_NGƯỜI_DÙNG: "Nhân viên 1",
      ĐỊA_CHỈ_IP: "192.168.0.0",
      TÁC_NHÂN: "Người dùng",
      NỘI_DUNG: "Nhân viên 001 đăng nhập",
      THỜI_GIAN: "26/05/2023 07:00 PM",
    },
    {
      STT: 2,
      MÃ_NHÂN_VIÊN: "NV002",
      TÊN_NGƯỜI_DÙNG: "Nhân viên 2",
      ĐỊA_CHỈ_IP: "192.168.0.1",
      TÁC_NHÂN: "Người dùng",
      NỘI_DUNG: "Nhân viên 002 đăng nhập",
      THỜI_GIAN: "26/05/2023 07:00 PM",
    },
    {
      STT: 3,
      MÃ_NHÂN_VIÊN: "NV003",
      TÊN_NGƯỜI_DÙNG: "Nhân viên 3",
      ĐỊA_CHỈ_IP: "192.168.0.2",
      TÁC_NHÂN: "Người dùng",
      NỘI_DUNG: "Nhân viên 003 đăng nhập",
      THỜI_GIAN: "26/05/2023 07:00 PM",
    },
    {
      STT: 4,
      MÃ_NHÂN_VIÊN: "NV004",
      TÊN_NGƯỜI_DÙNG: "Nhân viên 4",
      ĐỊA_CHỈ_IP: "192.168.0.3",
      TÁC_NHÂN: "Người dùng",
      NỘI_DUNG: "Nhân viên 004 đăng nhập",
      THỜI_GIAN: "26/05/2023 07:00 PM",
    },
    {
      STT: 5,
      MÃ_NHÂN_VIÊN: "NV005",
      TÊN_NGƯỜI_DÙNG: "Nhân viên 5",
      ĐỊA_CHỈ_IP: "192.168.0.4",
      TÁC_NHÂN: "Người dùng",
      NỘI_DUNG: "Nhân viên 005 đăng nhập",
      THỜI_GIAN: "26/05/2023 07:00 PM",
    },
    {
      STT: 6,
      MÃ_NHÂN_VIÊN: "NV006",
      TÊN_NGƯỜI_DÙNG: "Nhân viên 6",
      ĐỊA_CHỈ_IP: "192.168.0.5",
      TÁC_NHÂN: "Người dùng",
      NỘI_DUNG: "Nhân viên 006 đăng nhập",
      THỜI_GIAN: "26/05/2023 07:00 PM",
    },
  ]);
  //   useEffect(() => {
  //     getApplicationList()
  //       .then((response) => {
  //         setData(
  //           response.message.data.map((item) => ({
  //             MÃ_ỨNG_DỤNG: item.maUngDung,
  //             TÊN_ỨNG_DỤNG: item.tenUngDung,
  //             MÔ_TẢ: item.moTa,
  //             TRẠNG_THÁI: item.trangThai,
  //             DOMAIN: item.domain,
  //             URL: item.url,
  //             TOKEN_EXPIRATION: item.tokenExpiration,
  //             TÊN_TÀI_KHOẢN: item.tenTaiKhoan,
  //             MẬT_KHẨU: item.matKhau,
  //             XÁC_NHẬN_MẬT_KHẨU: item.xacNhanMatKhau,
  //           }))
  //         );
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);
  return { data, setData };
};

export default useData;
