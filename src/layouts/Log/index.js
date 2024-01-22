import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Searching from "./components/SearchingLog";
import LogList from "./components/LogList";

function Log() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Searching />
      <LogList />
    </DashboardLayout>
  );
}

export default Log;
