/* eslint-disable */
import { useEffect, useState } from "react";
import { getListProvince, getListDistrict, getListWard } from "api/common";

export default function useAdminDivision(
  province,
  district,
  ward,
  setCountry,
  setDistrict,
  setWard
) {
  const [listCountry] = useState([
    {
      value: "Việt Nam",
      label: "Việt Nam",
    },
  ]);
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [listWard, setListWard] = useState([]);

  useEffect(() => {
    setCountry(listCountry[0]);
    getListProvince().then((result) => {
      if (result.success) {
        const list = formatList(result.message.data);
        setListProvince(list);
      }
    });
  }, []);

  useEffect(() => {
    if (listProvince.length > 0 && province) {
      const provinceIndex = listProvince.findIndex((item) => item.value === province);
      if (provinceIndex > -1) {
        getListDistrict(listProvince[provinceIndex].item.code).then((result) => {
          if (result.success) {
            const list = formatList(result.message.data.districts);
            setListDistrict(list);
            const checkOldDistrict = findDistrict(list, district);
            if (checkOldDistrict === -1) {
              setDistrict("");
            }
          }
        });
      }
    }
  }, [province, listProvince]);

  useEffect(() => {
    if (!district) {
      setListWard([]);
      setWard("");
    }

    if (listDistrict.length > 0 && district) {
      const districtIndex = listDistrict.findIndex((item) => item.value === district);
      if (districtIndex > -1) {
        getListWard(listDistrict[districtIndex].item.code).then((result) => {
          if (result.success) {
            const list = formatList(result.message.data.wards);
            setListWard(list);
            const checkOldWard = findWard(list, ward);
            if (checkOldWard === -1) setWard("");
          }
        });
      }
    }
  }, [district, listDistrict]);

  function formatList(list) {
    return list.map((item) => {
      let result = item.name;
      // const listRemove = ["Tỉnh ", "Thành phố ", "Thị xã ", "Quận ", "Huyện ", "Phường ", "Xã "];
      // listRemove.map((element) => {
      //   result = result.replace(element, "");
      // });

      return {
        value: result,
        label: result,
        item: item,
      };
    });
  }

  function findDistrict(listDistrict, currentDistrict) {
    return listDistrict.findIndex((item) => item.value === currentDistrict);
  }

  function findWard(listWard, currentWard) {
    return listWard.findIndex((item) => item.value === currentWard);
  }

  return {
    listCountry,
    listProvince,
    listDistrict,
    listWard,
  };
}
