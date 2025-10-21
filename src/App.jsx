import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./ui/appLayout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Subscription from "./pages/Subscription/subscription";
import Login from "./pages/Login/Login";
import Auth from "./pages/authScreen/authScreen";
import RegisterUser from "./pages/registerUser/registerUser";
import NotFound from "./pages/Error/Error";
import Stores from "./pages/Stores/Stores";
import Dashboard from "./pages/dashboard/Dashboard";
import TermOfService from "./pages/tearmOfService/termOfService";
import FAQ from "./pages/frequentlyAsked Question/raq";
import JoinUs from "./pages/joinUs/JoinUs";
import Settings from "./pages/dashboard/Settings";

import Analytics from "./pages/dashboard/Analytics";
import ActiveCoupons from "./pages/dashboard/ActiveCoupons";
import UpcomingCoupons from "./pages/dashboard/UpcomingCoupons";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCoupons from "./pages/admin/CouponsManagement";
import AdminUsers from "./pages/admin/UsersManagement";
import AdminStores from "./pages/admin/StoresManagement";
import AdminSiteSettings from "./pages/admin/AdminSiteSettings";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import FileLibrary from "./pages/admin/FileLibrary";
import Reports from "./pages/admin/Reports";
export default function App() {
  // const { lang } = useParams();
  // const { i18n } = useTranslation();

  // useEffect(() => {
  //   if (lang) i18n.changeLanguage(lang);
  // }, [lang, i18n]);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <AboutUs /> },
        { path: "stores", element: <Stores /> },
        { path: "subscription", element: <Subscription /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <RegisterUser /> },
        { path: "auth", element: <Auth /> },
        { path: "terms", element: <TermOfService /> },
        { path: "faq", element: <FAQ /> },
        { path: "join", element: <JoinUs /> },
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            // Changed from children={ to children: [
            { index: true, element: <Analytics /> },
            { path: "analytics", element: <Analytics /> },
            { path: "active-coupons", element: <ActiveCoupons /> },
            { path: "upcoming-coupons", element: <UpcomingCoupons /> },
            { path: "settings", element: <Settings /> },
            { path: "reports", element: <Reports /> },
          ], // Changed from } to ]
        },
        {
          path: "admin",
          element: <AdminDashboard />,
          children: [
            { index: true, element: <AdminAnalytics /> },
            { path: "analytics", element: <AdminAnalytics /> },

            { path: "coupons", element: <AdminCoupons /> },
            { path: "users", element: <AdminUsers /> },
            { path: "stores", element: <AdminStores /> },
            { path: "site-settings", element: <AdminSiteSettings /> },
            { path: "file-library", element: <FileLibrary /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
