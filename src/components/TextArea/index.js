import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Fieldset, Legend } from "components/StyledComponents";
import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";

const TextAreaStyled = styled(TextareaAutosize)({
  border: "none",
  outline: "none",
  padding: "2px 0",
  resize: "none",
  fontSize: "14px",
  color: "#3F4254",
});
function TextArea({
  onChange,
  value,
  type,
  disabled,
  required,
  placeholder,
  endAdornment,
  label,
  ...rest
}) {
  // const inputId = uuidv4();

  return (
    <Fieldset
      {...rest}
      sx={{ backgroundColor: disabled ? "#F5F5F5" : "#fff", borderRadius: "4px" }}
    >
      {label && (
        <Legend>
          {label}
          {required ? <span style={{ color: "#FF3C3C" }}>*</span> : null}
        </Legend>
      )}
      <TextAreaStyled
        minRows={4}
        maxRows={10}
        sx={{
          paddingBottom: label ? "8px" : 0,
          width: "100%",
          background: disabled ? "#F5F5F5" : "",
        }}
        disabled={disabled}
        placeholder={placeholder || ""}
        onChange={onChange}
        value={value || ""}
        required={required}
        type={type}
      />
      {endAdornment}
    </Fieldset>
  );
}
export default TextArea;

TextArea.defaultProps = {
  type: "text",
  required: false,
  endAdornment: "",
  value: "",
  onChange: () => {},
  disabled: false,
  placeholder: "",
  label: "",
};

TextArea.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  endAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};
