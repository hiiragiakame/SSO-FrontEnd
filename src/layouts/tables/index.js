// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
// import SuiBox from "components/SuiBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SuiTabs from "examples/Tabs";
// import Table from "examples/Tables/Table";

// Data
import tabs from "layouts/tables/data/tabsData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <SuiTabs tabs={tabs} />
      </Card>
    </DashboardLayout>
  );
}

export default Tables;
