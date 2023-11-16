/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card, Grid } from "@mui/material";
import { getDevicesBySubFee } from "api/common";
import IconSearch from "assets/images/IconSearch.svg";
import Input from "components/Input";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import { useSoftUIController } from "context";
import { setAlertMessage, setLoading } from "context/common/action";
import Table from "examples/Tables/Table";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

const columns = [{ name: "Loại thiết bị" }, { name: "Công suất" }, { name: "Số lượng" }];

function AddProduct({
  onClose,
  onSave,
  deviceList,
  setSearchDevices,
  setDeviceList,
  subscriptionFeeId,
}) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [, dispatch] = useSoftUIController();
  const [totalElements, setTotalElements] = useState(0);
  const [queryfilter, setQueryFilter] = useState({
    number: 0,
    size: 20,
    sort: "id,ASC",
  });
  const editableKeyToFocus = useRef(null);

  const fetchData = () => {
    setLoading(dispatch, true);
    const { number, size, sort } = queryfilter;
    getDevicesBySubFee(subscriptionFeeId, number, size, sort, searchValue)
      .then((res) => {
        if (res.success) {
          const { data } = res.message.data;
          if (data) {
            const listData = data.content?.map((item) => ({
              ...item.deviceDetailDTOList[0],
              feeTypeName: item.feeTypeName,
              feeDetails: item.feeDetails,
              amount: 0,
            }));
            setDeviceList(listData);
            setTotalElements(data.totalElements);
          } else {
            setDeviceList([]);
            setTotalElements(0);
          }
          setLoading(dispatch, false);
        } else {
          setAlertMessage(dispatch, {
            message: res.message?.data.message,
            type: "error",
            openAlert: true,
          });
          setLoading(dispatch, false);
        }
      })
      .finally(() => setLoading(dispatch, false));
  };

  useEffect(() => {
    if (subscriptionFeeId) {
      fetchData();
    }
  }, [subscriptionFeeId, queryfilter]);

  // Note:
  // tableRows mapping row to table component is mounted
  // tableData store the same data and store the updated value of input [Số lượng] property
  // to avoid losing value when table component re-render due to selectedRows changes
  //---------
  const tableRows = deviceList?.map((item, key) => ({
    id: item.deviceId,
    "Loại thiết bị": item.deviceName,
    "Công suất": item.wattage,
    "Số lượng": (
      <input
        style={{ width: "100%", textAlign: "right" }}
        key={key}
        type="number"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={key === editableKeyToFocus.current}
        min={1}
        value={tableData[key]?.quantity}
        onChange={(e) => {
          let val = parseInt(e.target.value, 10);
          editableKeyToFocus.current = key;
          if (val <= 0) {
            val = 1;
          }

          //   if (val > item?.quantity) {
          //     val = item.quantity;
          //   }

          const tmp = [...tableData];
          tmp[key].quantity = val;
          setTableData(tmp);
        }}
      />
    ),
    image: item.image,
  }));

  useEffect(() => {
    const tmp = deviceList?.map((item) => ({
      quantity: 1,
      id: item.deviceId,
      "Loại thiết bị": item.deviceName,
      "Tên thiết bị": item.deviceCode,
      Model: item.model,
      "Hình thức thuê": item.feeTypeName,
      "Thời gian": item.feeDetails,
      image: item.image,
    }));
    setTableData(tmp);
  }, [deviceList]);

  const handleSave = () => {
    const matchingItems = tableData.reduce((acc, item1) => {
      const matchingItem = selectedRows.find((item2) => item2.id === item1.id);
      if (matchingItem) {
        acc.push(item1);
      }
      return acc;
    }, []);
    onSave(matchingItems);
    onClose();
  };

  return (
    <SuiBox>
      <Grid container flexDirection="column" gap={1}>
        <Grid item container justifyContent="center">
          Chọn thiết bị
        </Grid>
        <Grid item container gap={1} flexWrap="nowrap" justifyContent="center">
          <Grid item xs={9}>
            <Input
              placeholder="Tìm kiếm thiết bị"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              // value={formData.searchValue}
              // onChange={(e) => setFormData({ ...formData, searchValue: e.target.value })}
              sx={({ breakpoints }) => ({
                height: "44px",
                background: "white",
                [breakpoints.down("sm")]: {
                  minWidth: "0px",
                  width: "100%",
                },
              })}
            />
          </Grid>
          <Grid item xs={1}>
            <SuiButton
              sx={{
                maxWidth: "47px",
                height: "40px",
                background: "var(--blue-blue-80)",
                "&:hover": { background: "var(--blue-blue-100)" },
                "&:focus:not(:hover)": { background: "var(--blue-blue-100)" },
              }}
              onClick={() => fetchData()}
            >
              <SuiBox
                component="img"
                src={IconSearch}
                alt="IconSearch"
                width="20px"
                height="20px"
              />
            </SuiButton>
          </Grid>
        </Grid>
        {!subscriptionFeeId && (
          <Grid item container justifyContent="center">
            <SuiTypography
              color="red"
              sx={{
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              Không tìm thấy thiết bị, vui lòng chọn Gói cước
            </SuiTypography>
          </Grid>
        )}
        <Grid item xs={12} sm={12} xl={12}>
          <Card sx={{ padding: "15px" }}>
            <Table
              columns={columns}
              rows={tableRows}
              borderRadius="0"
              rowsCount={queryfilter.size}
              setRowsCount={(pSize) => {
                setQueryFilter({
                  ...queryfilter,
                  size: pSize,
                  number: 0,
                });
              }}
              curPage={queryfilter.number}
              setCurPage={(nextPage) => {
                setQueryFilter({
                  ...queryfilter,
                  number: nextPage,
                });
              }}
              totalElements={totalElements}
              isRowSelectable
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          </Card>
        </Grid>
        <Grid item container justifyContent="center" gap={2}>
          <SuiButton
            size="small"
            color="white"
            circular
            sx={{
              border: "1px solid var(--blue-blue-100)",
              borderRadius: "5px",
              padding: "8px 24px",
              background: "initial",
            }}
            onClick={() => onClose()}
          >
            <SuiTypography
              whiteSpace="nowrap"
              variant="body2"
              color="var(--blue-blue-100)"
              fontSize="14px"
              sx={{
                fontWeight: "700",
              }}
            >
              Huỷ
            </SuiTypography>
          </SuiButton>

          <SuiButton
            size="small"
            color="info"
            circular
            sx={{
              background: "var(--blue-blue-100)",
              borderRadius: "5px",
              padding: "8px 24px",
            }}
            onClick={handleSave}
          >
            <SuiTypography
              whiteSpace="nowrap"
              variant="body2"
              color="white"
              fontSize="14px"
              sx={{
                fontWeight: "700",
              }}
            >
              Thêm
            </SuiTypography>
          </SuiButton>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

AddProduct.defaultProps = {
  onSave: () => {},
  setDeviceList: () => {},
  subscriptionFeeId: null,
};

AddProduct.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  setDeviceList: PropTypes.func,
  subscriptionFeeId: PropTypes.number,
  deviceList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      wattage: PropTypes.string,
      amount: PropTypes.string,
      code: PropTypes.string,
    })
  ).isRequired,
};
export default AddProduct;
