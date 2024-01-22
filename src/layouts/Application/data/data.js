import { getApplicationList } from "api/application";
import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([
    {
      MÃ_ỨNG_DỤNG: "NV001",
      TÊN_ỨNG_DỤNG: "Ứng dụng 1",
      MÔ_TẢ: "Mô tả 1",
      TRẠNG_THÁI: true,
      DOMAIN: "",
      URL: "",
      TOKEN_EXPIRATION: "",
      TÊN_TÀI_KHOẢN: "",
      MẬT_KHẨU: "",
      XÁC_NHẬN_MẬT_KHẨU: "",
    },
    {
      MÃ_ỨNG_DỤNG: "NV002",
      TÊN_ỨNG_DỤNG: "Ứng dụng 2",
      MÔ_TẢ: "Mô tả 2",
      TRẠNG_THÁI: true,
      DOMAIN: "",
      URL: "",
      TOKEN_EXPIRATION: "",
      TÊN_TÀI_KHOẢN: "",
      MẬT_KHẨU: "",
      XÁC_NHẬN_MẬT_KHẨU: "",
    },
    {
      MÃ_ỨNG_DỤNG: "NV003",
      TÊN_ỨNG_DỤNG: "Ứng dụng 3",
      MÔ_TẢ: "Mô tả 3",
      TRẠNG_THÁI: false,
      DOMAIN: "",
      URL: "",
      TOKEN_EXPIRATION: "",
      TÊN_TÀI_KHOẢN: "",
      MẬT_KHẨU: "",
      XÁC_NHẬN_MẬT_KHẨU: "",
    },
    {
      MÃ_ỨNG_DỤNG: "NV004",
      TÊN_ỨNG_DỤNG: "Ứng dụng 4",
      MÔ_TẢ: "Mô tả 4",
      TRẠNG_THÁI: true,
      DOMAIN: "",
      URL: "",
      TOKEN_EXPIRATION: "",
      TÊN_TÀI_KHOẢN: "",
      MẬT_KHẨU: "",
      XÁC_NHẬN_MẬT_KHẨU: "",
    },
    {
      MÃ_ỨNG_DỤNG: "NV005",
      TÊN_ỨNG_DỤNG: "Ứng dụng 5",
      MÔ_TẢ: "Mô tả 5",
      TRẠNG_THÁI: true,
      DOMAIN: "",
      URL: "",
      TOKEN_EXPIRATION: "",
      TÊN_TÀI_KHOẢN: "",
      MẬT_KHẨU: "",
      XÁC_NHẬN_MẬT_KHẨU: "",
    },
    {
      MÃ_ỨNG_DỤNG: "NV006",
      TÊN_ỨNG_DỤNG: "Ứng dụng 6",
      MÔ_TẢ: "Mô tả 6",
      TRẠNG_THÁI: true,
      DOMAIN: "",
      URL: "",
      TOKEN_EXPIRATION: "",
      TÊN_TÀI_KHOẢN: "",
      MẬT_KHẨU: "",
      XÁC_NHẬN_MẬT_KHẨU: "",
    },
  ]);
  useEffect(() => {
    getApplicationList()
      .then((response) => {
        setData(
          response.message.data.map((item) => ({
            MÃ_ỨNG_DỤNG: item.maUngDung,
            TÊN_ỨNG_DỤNG: item.tenUngDung,
            MÔ_TẢ: item.moTa,
            TRẠNG_THÁI: item.trangThai,
            DOMAIN: item.domain,
            URL: item.url,
            TOKEN_EXPIRATION: item.tokenExpiration,
            TÊN_TÀI_KHOẢN: item.tenTaiKhoan,
            MẬT_KHẨU: item.matKhau,
            XÁC_NHẬN_MẬT_KHẨU: item.xacNhanMatKhau,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data);
  return { data, setData };
};

export default useData;
