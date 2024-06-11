import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilPage from "../pages/ProfilPage";
import SignupPage from "../pages/SignupPage";
import Login from "../pages/Login";
import AddBook from "../pages/AddBook";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/profil",
		element: <ProfilPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/add-book",
		element: <AddBook />,
	},
]);

export default router;
