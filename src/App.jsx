import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./ui/appLayout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Subscription from "./pages/Subscription/subscription";
import Login from "./pages/Login/Login";
import Auth from "./pages/Login/authScreen";
import RegisterUser from "./pages/registerUser/registerUser";
import NotFound from "./pages/Error/Error";
import Stores from "./pages/Stores/Stores";

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
        { path: "about", element: <AboutUs /> },
        { path: "stores", element: <Stores /> },
        { path: "subscription", element: <Subscription /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <RegisterUser /> },
        { path: "auth", element: <Auth /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
