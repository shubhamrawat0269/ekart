import React from "react";
import { categoryItemsList } from "../../dummy";

const Category = () => {
  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="flex overflow-x-auto lg:justify-center  md:hide-scroll-bar">
          <div className="flex ">
            {/* category  */}

            {categoryItemsList.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-orange-500 transition-all hover:bg-orange-900 cursor-pointer mb-1 ">
                    <div className="flex justify-center mb-12">
                      <img
                        src={item.image}
                        className="w-[10rem]"
                        alt={`img-${index}`}
                      />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h3 className=" text-sm lg:text-lg text-center font-bold title-font first-letter:uppercase ">
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
