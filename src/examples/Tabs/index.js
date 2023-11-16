import SuiBox from "components/SuiBox";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
// import { v4 as uuidv4 } from "uuid";

// import { useState } from "react";
import PropTypes from "prop-types";
import SuiBadge from "components/SuiBadge";
import SuiTypography from "components/SuiTypography";
import { useSoftUIController } from "context";
import { useSearchParams } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <SuiBox sx={{ background: "var(--blue-gray-line)" }}>
          <Typography component="div" sx={{ position: "relative", display: "block" }}>
            {children}
          </Typography>
        </SuiBox>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function SuiTabs({ tabs, handleChangeTab, currentTab, stickyTab }) {
  // const [value, setValue] = useState(0);
  const [, dispatch] = useSoftUIController();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event, newValue) => {
    searchParams.set("tab", newValue);
    setSearchParams(searchParams);
    handleChangeTab(dispatch, newValue);
  };

  const stickyCss = {
    position: "sticky",
    zIndex: 1000,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)",
    background: "var(--blue-gray-line)",
    width: "100%",
    right: 0,
    left: 0,
    top: "0px",
    padding: "5px 0px 15px 0px",
  };

  const defaultCss = {
    marginBottom: "6px",
    padding: "5px 0px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)",
    background: "var(--blue-gray-line)",
  };
  return (
    <SuiBox sx={{ width: "100%" }}>
      <SuiBox sx={stickyTab ? stickyCss : defaultCss}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="scrollable"
          sx={{
            "& .MuiTab-root": {
              minHeight: "32px",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "var(--blue-blue-100) !important",
            },
          }}
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {tabs.map(({ label, data }, index) => (
            <Tab
              sx={{
                padding: "0px 14px",
                fontSize: "13px",
                fontWeight: 600,
              }}
              label={<SuiTypography variant="text">{label}</SuiTypography>}
              icon={
                data ? (
                  <SuiBadge
                    color="info"
                    size="sm"
                    sx={{
                      "& .MuiBadge-badge": {
                        background: "var(--blue-blue-100)",
                      },
                    }}
                    badgeContent={
                      <SuiTypography
                        variant="text"
                        fontSize="small"
                        fontWeight="regular"
                        // color="white"
                      >
                        {data > 99 ? "99+" : data}
                      </SuiTypography>
                    }
                  />
                ) : null
              }
              iconPosition="end"
              //   iconPosition={data &&"end"}
              key={index}
            />
          ))}
        </Tabs>
      </SuiBox>
      {tabs.map(({ Component }, i) => (
        <TabPanel value={currentTab} index={i} key={i} sx={{ display: "block" }}>
          {Component}
        </TabPanel>
      ))}
    </SuiBox>
  );
}

SuiTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChangeTab: PropTypes.func,
  currentTab: PropTypes.number,
  stickyTab: PropTypes.bool,
};
SuiTabs.defaultProps = {
  handleChangeTab: () => {},
  currentTab: 0,
  stickyTab: false,
};
