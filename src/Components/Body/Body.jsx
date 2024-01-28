import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import StoreIcon from "@mui/icons-material/Store";
import SellIcon from "@mui/icons-material/Sell";
import Leaflet from "../Map/Leaflet";
import Chart from "../Chart/Chart";
import BarChartComponent from "../../BarChart/BarChartComponent";
import BarChart from "../../BarChart/BarChart";

function Body() {
  return (
    <div className="text-white relative">
      <div className="">
        <div>
          <div className="flex absolute top-[81px] left-[60px] items-center">
            <h6 className="font-bold text-sm">All users</h6>
            <p className="absolute left-[70px]">DETAIL</p>
            <IoIosArrowForward className="absolute left-[120px] text-md" />
          </div>
          <h1 className="font-bold absolute top-[105px] left-[60px] text-4xl">
            2,431,120
          </h1>
        </div>
        <div>
          <div className="">
            <ShowChartIcon
              className="absolute top-[169px] left-[60px]"
              fontSize="large"
            />
            <div className="absolute top-[163px] left-[120px]">
              <h1>Total Earning</h1>
              <h1 className="font-bold ">540,320</h1>
            </div>
          </div>
          <div>
            <SellIcon
              className="absolute top-[239px] left-[60px]"
              fontSize="large"
            />
            <div className="absolute top-[229px] left-[120px]">
              <h1>Sales</h1>
              <h1 className="font-bold ">1,204,540</h1>
            </div>
          </div>
          <div>
            <StoreIcon
              className="absolute top-[319px] left-[60px]"
              fontSize="large"
            />
            <div className="absolute top-[309px] left-[120px]">
              <h1>Purchase</h1>
              <h1 className="font-bold ">43,549,961</h1>
            </div>
            <Chart />
            {/* I tried to use Mapbox, since i dont have any CC. So I tried using Leaflet instead */}
            <Leaflet />
          </div>
        </div>
      </div>
      <div>
        {/* <BarChartComponent /> */}
        {/* Tried to implement the barChart */}
        {/* <BarChart /> */}
      </div>
    </div>
  );
}

export default Body;
