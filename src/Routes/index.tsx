import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Analysis,
  Custompg,
  FreeTrial,
  GetaQuote,
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
  { path: "/analysis", element: <Analysis /> },
]);

function Index() {
  return (
    <div>
      <RouterProvider router={pages} />
    </div>
  );
}

export default Index;
