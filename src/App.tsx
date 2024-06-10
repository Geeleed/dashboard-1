import SmallCard from "./components/SmallCard";
import { Bag, Cart, Dollar, People } from "./SVG";
import LineChart from "./components/LineChart";
import SalesGrowth from "./components/SalesGrowth";
import SalesByLocation from "./components/SalesByLocation";
import TopSelling from "./components/TopSelling";
import BrowserState from "./components/BrowserState";

export default function App() {
  return (
    <div className=" flex flex-col gap-8 p-6 bg-gray-100 w-full pb-0">
      <nav className=" flex justify-between items-center px-4 py-3">
        <h1 className=" font-extrabold text-[2rem]">Dashboard</h1>
        <p className=" text-[0.8rem]">Example 1</p>
      </nav>
      <section className=" flex gap-8 w-full max-xl:flex-col">
        <aside className=" grid grid-cols-2 gap-6 w-full max-sm:grid-cols-1">
          <SmallCard
            text1="100+"
            text2="Total Products"
            text3="25.36%"
            text4="Since last month"
            icon={<Bag />}
            iconColor="#fb3586"
            up="up"
          />
          <SmallCard
            text1="30,825"
            text2="Total Orders"
            text3="25.36%"
            text4="Since last month"
            icon={<Cart />}
            iconColor="#5840ff"
            up="up"
          />
          <SmallCard
            text1="$30,825"
            text2="Total Sales"
            text3="25.36%"
            text4="Since last month"
            icon={<Dollar />}
            iconColor="#fa8b0c"
          />
          <SmallCard
            text1="30,825+"
            text2="New Customers"
            text3="25.36%"
            text4="Since last month"
            icon={<People />}
            iconColor="#00aaff"
            up="up"
          />
        </aside>
        <aside className=" bg-gray-50 flex flex-col rounded-xl overflow-hidden p-6 gap-4 h-[25rem] max-sm:h-[15rem] w-full">
          <section>
            <h1 className=" font-bold">Sales Report</h1>
          </section>
          <section className=" h-[5rem] flex justify-center gap-5">
            <span className=" flex gap-2 items-center">
              <div className=" size-[0.5rem] rounded-full bg-[#fb3586]"></div>
              <div>Orders</div>
              <strong className=" text-[1.5rem]">$8550</strong>
            </span>
            <span className=" flex gap-2 items-center">
              <div className=" size-[0.5rem] rounded-full bg-[#5840ff]"></div>
              <div>Sales</div>
              <strong className=" text-[1.5rem]">$550</strong>
            </span>
          </section>
          <LineChart />
        </aside>
      </section>

      <section className=" flex flex-1 gap-8 w-full max-xl:flex-col max-xl:*:w-full">
        <aside className=" w-1/3">
          <SalesGrowth />
        </aside>
        <aside className=" w-1/3">
          <SalesByLocation />
        </aside>
        <aside className=" w-1/3 flex justify-center items-center text-gray-900 bg-gray-50 text-[3rem] font-extrabold rounded-xl max-xl:min-h-[20rem]">
          Dashboard
        </aside>
      </section>

      <section className=" flex gap-8 w-full max-xl:flex-col">
        <aside className=" w-full">
          <TopSelling />
        </aside>
        <aside className=" w-full">
          <BrowserState />
        </aside>
      </section>
      <footer className=" text-center py-4 border-t border-gray-200 bg-gray-50">
        {"Reference: "}
        <a
          className=" hover:text-[#fb3586]"
          href="https://demo.dashboardmarket.com/hexadash-react/admin"
          target="_blank"
        >
          https://demo.dashboardmarket.com/hexadash-react/admin
        </a>
      </footer>
    </div>
  );
}
