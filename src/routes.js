import Dashboard from "views/Dashboard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "Email",
    icon: "nc-icon nc-email-85",
    layout: "/admin",
  },
  {
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    layout: "/admin",
  },
  {
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    layout: "/admin",
  },
  {
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    layout: "/admin",
  },
  {
    name: "Typography",
    icon: "nc-icon nc-tile-56",
    // =layout: "/admin",
  },
  {
    name: "Feather",
    icon: "nc-icon nc-caps-small",
    // component: Typography,
    layout: "/admin",
  },
  {
    name: "Cards",
    icon: "nc-icon nc-caps-small",
    // component: Typography,
    layout: "/admin",
  },
  {
    // path: "/typography",
    name: "Test",
    icon: "nc-icon nc-caps-small",
    // component: Typography,
    layout: "/admin",
  },
];
export default routes;
