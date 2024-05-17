import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/admin/ProductDetail";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";
import { User } from "lucide-react";
import NumberIcon from "../../assets/number-svg";
import BaggitIcon from "../../assets/baggit-svg";
import PeopleIcon from "../../assets/muti-people";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const { allProduct } = useGlobalContext();

  return (
    <div>
      {/* Top */}
      <div className="top mb-5 px-5 mt-5">
        <div className=" bg-orange-500 py-5 rounded-lg">
          <h1 className=" text-center text-2xl font-bold text-orange-200">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-5">
        {/* Mid  */}
        <div className="mid mb-5">
          {/* main  */}
          <div className=" bg-orange-500 py-5 rounded-xl">
            {/* image  */}
            <div className="flex justify-center">
              <div className="bg-gray-100 my-3 rounded-full w-[6rem] p-2">
                <User size={80} color="grey" />
              </div>
            </div>
            {/* text  */}
            <div className="">
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Name : </span>
                {user?.name}
              </h1>
              {/* Email  */}
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Email : </span>
                {user?.email}
              </h1>
              {/* Date  */}
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Date : </span>
                {user?.date}
              </h1>
              {/* Role  */}
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Role : </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="">
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-orange-500 hover:bg-orange-800 px-4 py-3 rounded-xl">
                  <div className="w-12 h-12 mb-3 inline-block">
                    <BaggitIcon />
                  </div>
                  <h2 className="title-font font-medium text-3xl fonts1">
                    {allProduct.length}
                  </h2>
                  <p className="font-bold">Total Products</p>
                </div>
              </Tab>

              {/* Total Order  */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-orange-500 px-4 py-3 rounded-xl">
                  <div className="w-12 h-12 mb-3 inline-block">
                    <NumberIcon />
                  </div>
                  <h2 className="title-font font-medium text-3xl fonts1">10</h2>
                  <p className="font-bold">Total Order</p>
                </div>
              </Tab>

              {/* Total User  */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className=" border bg-orange-500  px-4 py-3 rounded-xl">
                  <div className="w-12 h-12 mb-3 inline-block">
                    <PeopleIcon />
                  </div>
                  <h2 className="title-font font-medium text-3xl fonts1">10</h2>
                  <p className="font-bold">Total Order</p>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDetail />
            </TabPanel>

            <TabPanel>
              <OrderDetail />
            </TabPanel>

            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
