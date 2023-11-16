/* eslint-disable */
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import Forgot from "layouts/authentication/forgot";
import ResetPasswordFirsttime from "layouts/authentication/sign-in/components/resetPassword";
import OTPSignin from "layouts/authentication/sign-in/OTP";
import { roles } from "constants/config";
import ReportIcon from "assets/images/icons/daikin-admin/report/report.png";
import GeneralIcon from "assets/images/icons/daikin-admin/report/general.png";

const routes = [
  /*************************************  Báo cáo *********************************/
  {
    type: "title",
    title: "BÁO CÁO",
    key: "report",
    display: true,
    icon: ReportIcon,
    roles: [roles.admin, roles.employee],
    collapse: [
      {
        type: "collapse",
        name: "Chung",
        box: "report",
        key: "dashboard",
        route: "/operator/report/dashboard",
        icon: GeneralIcon,
        component: <Dashboard />,
        noCollapse: true,
        roles: [roles.admin, , roles.employee],
      },
    ],
  },
  {
    name: "Đăng nhập",
    key: "sign-in",
    route: "/authentication/sign-in",
    component: <SignIn />,
    noneSidebar: true,
  },
  {
    name: "Quên mật khẩu",
    key: "forgot-password",
    route: "/authentication/forgot-password",
    component: <Forgot />,
    noneSidebar: true,
  },
  {
    name: "Xác nhập OTP đăng nhập",
    key: "confirm-otp-signin",
    route: "/authentication/sign-in/OTP",
    component: <OTPSignin />,
    noneSidebar: true,
  },
  {
    name: "Đổi mật khẩu lần đầu",
    key: "reset-firsttime",
    route: "/authentication/sign-in/reset-firsttime",
    component: <ResetPasswordFirsttime type="first" />,
    noneSidebar: true,
  },
];

export default routes;