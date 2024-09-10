import { HomeIcon, LayoutDashboardIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Admin Dashboard",
    to: "/admin",
    icon: <LayoutDashboardIcon className="h-4 w-4" />,
    page: <AdminDashboard />,
  },
];