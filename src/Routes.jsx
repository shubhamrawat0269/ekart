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
    element: <UserDashboard />,
    // errorElement: <Nopage />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    // errorElement: <Nopage />,
  },
  {
    path: "/addproduct",
    element: <AddProductPage />,
    // errorElement: <Nopage />,
  },
  {
    path: "/updateproduct",
    element: <UpdateProductPage />,
    // errorElement: <Nopage />,
  },
];

export default routes;
