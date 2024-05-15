import {
  NoPage,
  HomePage,
  ProductInfo,
  CartPage,
  AllProduct,
  Signup,
  Login,
  UserDashboard,
  AdminDashboard,
  AddProductPage,
  UpdateProductPage,
} from "./pages";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <Nopage />,
  },
  {
    path: "/*",
    element: <NoPage />,
    // errorElement: <Nopage />,
  },
  {
    path: "/productinfo",
    element: <ProductInfo />,
    // errorElement: <Nopage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
    // errorElement: <Nopage />,
  },
  {
    path: "/allproduct",
    element: <AllProduct />,
    // errorElement: <Nopage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    // errorElement: <Nopage />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <Nopage />,
  },
  {
    path: "/user-dashboard",
    element: (
      <ProtectedRouteForUser>
        <UserDashboard />
      </ProtectedRouteForUser>
    ),
    // errorElement: <Nopage />,
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRouteForAdmin>
        <AdminDashboard />
      </ProtectedRouteForAdmin>
    ),
    // errorElement: <Nopage />,
  },
  {
    path: "/addproduct",
    element: (
      <ProtectedRouteForAdmin>
        <AddProductPage />
      </ProtectedRouteForAdmin>
    ),
    // errorElement: <Nopage />,
  },
  {
    path: "/updateproduct",
    element: (
      <ProtectedRouteForAdmin>
        <UpdateProductPage />
      </ProtectedRouteForAdmin>
    ),
    // errorElement: <Nopage />,
  },
];

export default routes;
