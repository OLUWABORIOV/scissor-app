import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Custompg,
  FreeTrial,
  GetaQuote,
  HistoryPage,
  Home,
  LandingPage,
  Login,
  OnBoarding,
  PasswordForgot,
  QrPage,
  Signup,
  UrlShortner,
  UrlShortnerPg,
} from "../Pages";
 
import{
FaqSection,
FeaturesPg,
UrlSectionPg,
Analysis,

} from "../components";

const pages = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/Home", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/quote", element: <GetaQuote /> },
  { path: "/free", element: <FreeTrial /> },
  { path: "forgetPassword", element: <PasswordForgot /> },
  { path: "/signedin", element: <OnBoarding /> },
  { path: "/shortenedUrl", element: <UrlShortner /> },
  { path: "/urlshortner", element: <UrlShortnerPg /> },
  { path: "/qrpage", element: <QrPage /> },
  { path: "/custom", element: <Custompg /> },
  {  path: "/history", element: <HistoryPage /> },
  { path: "/analysis", element: <Analysis/>},
  { path: "/faqs", element: <FaqSection/>},
  { path: "/url", element: <UrlSectionPg/>},
  { path: "/feature", element: <FeaturesPg/>},
]);





function Index() {
  return (
    <div>
      <RouterProvider router={pages} />
      
    </div>
  );
}

export default Index;
