/* eslint-disable react/prop-types */
import { DeleteOutline } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
// eslint-disable-next-line import/no-named-default
import { default as MuiAvatar } from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { isImage } from "utils/verify";
import DefaultProfileImage from "assets/images/icons/businessman.png";
import { setAlertMessage } from "context/common/action";
import { useSoftUIController } from "context";

const ImageWrapper = styled("fieldset")({
  borderRadius: "50%",
  backgroundColor: "transparent",
  width: "fitContent",
  border: "6px solid #e5eaee",
  padding: "20px",
  position: "relative",
  gap: "24px",
});
const CustomAvatar = styled(MuiAvatar)({
  width: "168px",
  height: "168px",
  borderRadius: "50%",
  objectFit: "cover",
  fontSize: 128,
  backgroundColor: "#f5f5f5",
  "& .MuiAvatar-fallback": {
    background: `url(${DefaultProfileImage}) center no-repeat`,
    path: {
      display: "none",
    },
  },
});

const UploadBtn = styled("label")({
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: "14px",
  color: "#00b6de",
  textDecoration: "underline",
  cursor: "pointer",
});

const validImageTypes = ["image/png", "image/jpeg", "image/jpg"];

function Avatar({ text, onChange, image, setImage }) {
  const [, dispatch] = useSoftUIController();

  function convertBase64(file) {
    return new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        res(fileReader.result);
      };
      fileReader.onerror = (error) => {
        rej(error);
      };
    });
  }

  const handleUpload = async (e) => {
    if (e.target.files[0]) {
      const fileSize = e.target.files[0].size / 1024 / 1024;
      if (fileSize > 5) {
        setAlertMessage(dispatch, {
          message: `Kích thước hình ảnh lớn hơn 5MB`,
          type: "error",
          openAlert: true,
        });
      } else {
        // const file = e.target.files[0];
        const base64Image = await convertBase64(e.target.files[0]);
        const validateImg = isImage(base64Image, "Ảnh đại diện", () => {
          setAlertMessage(dispatch, {
            message: `Ảnh chưa đúng định dạng`,
            type: "error",
            openAlert: true,
          });
        });
        if (validateImg) {
          //   setImage(URL.createObjectURL(file));
          setImage(base64Image);
          onChange(base64Image);
        }
      }
    }
  };
  const avatarId = uuidv4();
  return (
    <Grid container flexDirection="column" alignItems="center" gap={2}>
      <ImageWrapper>
        <CustomAvatar src={image} />
        {image ? (
          <IconButton
            onClick={() => {
              onChange(null);
              setImage(null);
            }}
            aria-label="delete"
            size="small"
            className="delete-btn"
            sx={{
              backgroundColor: "#CECECE",
              borderRadius: "50%",
              position: "absolute",
              bottom: 30,
              right: 30,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "red",
                "> svg": {
                  fill: "white",
                },
              },
            }}
          >
            <DeleteOutline />
          </IconButton>
        ) : null}
      </ImageWrapper>
      {text ? (
        <UploadBtn htmlFor={avatarId}>
          <input
            style={{ display: "none" }}
            type="file"
            value=""
            id={avatarId}
            accept={validImageTypes}
            onChange={handleUpload}
          />
          {text}
        </UploadBtn>
      ) : null}
    </Grid>
  );
}
export default Avatar;

Avatar.defaultProps = {
  text: "",
  onChange: () => {},
};

Avatar.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};
