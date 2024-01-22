import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Searching from "./components/SearchingApplication";
import ApplicationList from "./components/ApplicationList";

function Application() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Searching />
      <ApplicationList />
    </DashboardLayout>
  );
}

export default Application;
