import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./ui/appLayout";
import Home from "./ui//home/Home";
import AboutUs from "./ui/aboutUs";
import Subscription from "./ui/subscription";
import Login from "./ui/Login";
import RegisterUser from "./ui/registerUser";
import NotFound from "./ui/Error";
import Stores from "./ui/Stores";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
