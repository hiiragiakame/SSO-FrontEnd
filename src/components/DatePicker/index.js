/* eslint-disable no-unused-vars */
import { Fieldset, Legend } from "components/StyledComponents";
import PropTypes from "prop-types";
import { DatePicker as RsuiteDatePicker } from "rsuite";
import "./styles.css";

export default function DatePicker(props) {
  const {
    placeholder,
    format,
    label,
    onChange,
    disabled,
    required,
    value,
    onChangeCalendarDate,
    ...rest
  } = props;
  return (
    <Fieldset
      sx={{ background: disabled ? "#F5F5F5" : "#fff" }}
      {...rest}
      className={placeholder ? "" : "hiddenPlaceHolder"}
    >
      <Legend>
        {label}
        {required ? <span style={{ color: "#FF3C3C" }}>*</span> : null}
      </Legend>
      <RsuiteDatePicker
        oneTap
        style={{ width: "100%" }}
        placeholder={placeholder}
        format={format}
        onChange={onChange}
        onChangeCalendarDate={onChangeCalendarDate}
        placement="auto"
        disabled={disabled}
        value={value && new Date(value)}
      />
    </Fieldset>
  );
}

DatePicker.defaultProps = {
  placeholder: "Chọn thời gian",
  label: "Label",
  onChange: () => {},
  disabled: false,
  required: false,
  value: new Date(),
  format: "dd/MM/yyyy",
  onChangeCalendarDate: () => {},
};

DatePicker.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  format: PropTypes.oneOf(["dd/MM/yyyy", "MM/yyyy"]),
  onChangeCalendarDate: PropTypes.func,
};
