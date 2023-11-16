import { Fieldset, Legend } from "components/StyledComponents";
import PropTypes from "prop-types";
import { DateRangePicker as RsuiteDateRangePicker } from "rsuite";

import "./dateRangePicker.css";

export default function DateRangePicker(props) {
  const { placeholder, label, required, setDateRange, autoPlacement, value, ...rest } = props;

  const predefinedRanges = [
    {
      label: "Hôm nay",
      value: [new Date(), new Date()],
      placement: "left",
    },
  ];

  const handleOk = (values) => {
    if (values) {
      setDateRange(values);
    }
  };
  return (
    <Fieldset {...rest}>
      <Legend>
        {label}
        {required ? <span style={{ color: "#FF3C3C" }}>*</span> : null}
      </Legend>
      <RsuiteDateRangePicker
        format="dd/MM/yyyy"
        ranges={predefinedRanges}
        placeholder={placeholder}
        style={{ width: "100%" }}
        onClean={() => {
          setDateRange([]);
        }}
        onChange={(v) => setDateRange(v)}
        onOk={handleOk}
        value={value[0] ? [new Date(value[0]), new Date(value[1])] : null}
        placement={autoPlacement || "bottomStart"}
      />
    </Fieldset>
  );
}

DateRangePicker.defaultProps = {
  placeholder: "Chọn khoảng thời gian",
  value: [],
  setFromDate: () => {},
  setToDate: () => {},
  setDateRange: () => {},
  label: "Label",
  required: false,
  autoPlacement: "",
};

DateRangePicker.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  setFromDate: PropTypes.func,
  setToDate: PropTypes.func,
  setDateRange: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  autoPlacement: PropTypes.string,
};
