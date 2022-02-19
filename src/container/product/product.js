import React, { useState } from "react";
import Layout from "../../components/Layout";
import Search from "../../assets/images/search.svg";
import Plus from "../../assets/images/plus.svg";
import LeftIcon from "../../assets/images/left.svg";
import RightIcon from "../../assets/images/right.svg";
import Button from "../../components/button/button";
import Cross from "../../assets/images/cross.svg";
import ProductTable from "./productTable";

const Product = () => {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState("tab1");

  return (
    <>
      <Layout>
        <h1 className="text-darkblue text-2xl font-bold uppercase">
          Product Details
        </h1>
        <h2 className="text-litegray text-lg font-normal">
          Main Organization : ECD
        </h2>
        <section className="mt-10 border-b border-darkblue">
          <button
            className={` ${
              tab === "tab1" ? "border-b-2 border-darkblue font-semibold" : ""
            } py-2  px-3 text-lg  `}
            onClick={() => setTab("tab1")}
          >
            All Organization
          </button>
          <button
            className={` ${
              tab === "tab2" ? "border-b-2 border-darkblue font-semibold" : ""
            } py-2  px-3 text-lg  `}
            onClick={() => setTab("tab2")}
          >
            High Rating
          </button>
        </section>
        {tab === "tab1" && (
          <>
            <section className="mt-10 flex justify-between">
              <div className="flex items-center ">
                <div className=" relative">
                  <input
                    type="text"
                    placeholder="Search Organization"
                    className="border-b w-56 h-12 text-litegray"
                  />
                  <img
                    src={Search}
                    className="absolute right-0 top-3 cursor-pointer"
                  />
                </div>
                <div className="ml-10">
                  <label className="text-sm text-darkblue font-medium">
                    Row per page
                  </label>
                  <select className="border border-darkblue w-20 h-8 ml-3 text-sm text-darkblue ">
                    <option>select</option>
                  </select>
                </div>
              </div>
              <Button
                onClick={() => setShow(true)}
                className="w-56 h-12 bg-darkblue text-white flex items-center justify-center rounded-full gap-x-3"
                text="Add User"
                img={Plus}
              />
              <section
                className={`${
                  show ? "show__modal" : "hide__modal"
                } " add__organization flex justify-end "`}
              >
                <div className="bg-white w-2/5 h-screen px-14 py-10 overflow-y-scroll scroll__bar">
                  <Button
                    onClick={() => setShow(false)}
                    img={Cross}
                    className="w-6 h-6 block ml-auto"
                  />
                  <h1 className="text-darkblue text-3xl font-bold border-b-2 mt-7 border-secondry w-max pb-3">
                    Add Product
                  </h1>
                  <form className="mt-8">
                    <div className="mb-7">
                      <label className="text-darkblue text-sm ">Name</label>
                      <input
                        type="text"
                        className="h-12 w-full border border-litegray rounded-full pl-4"
                      />
                    </div>
                    <div className="mb-7">
                      <label className="text-darkblue text-sm ">Area</label>
                      <input
                        type="text"
                        className="h-12 w-full border border-litegray rounded-full pl-4"
                      />
                    </div>
                    <div className="mb-7">
                      <label className="text-darkblue text-sm ">Address</label>
                      <input
                        type="text"
                        className="h-12 w-full border border-litegray rounded-full pl-4"
                      />
                    </div>
                    <div className="mb-7">
                      <label className="text-darkblue text-sm ">City</label>
                      <input
                        type="text"
                        className="h-12 w-full border border-litegray rounded-full pl-4"
                      />
                    </div>
                    <div className="mb-7">
                      <label className="text-darkblue text-sm ">Country</label>
                      <input
                        type="text"
                        className="h-12 w-full border border-litegray rounded-full pl-4"
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button
                        text="Add Supplier"
                        className="bg-darkblue w-40 text-white rounded-full"
                      />
                      <Button
                        text="Cancel"
                        className="text-darkblue w-40 border border-darkblue bg-white rounded-full"
                      />
                    </div>
                  </form>
                </div>
              </section>
            </section>
            <section className="mt-10 flex justify-between items-center">
              <p className="text-litegray text-sm ">Showing 1-10 of 25</p>
              <div>
                <Button img={LeftIcon} className="mx-1" />
                <Button
                  text="1"
                  className="border w-10 h-10 bg-darkblue text-white rounded-full mx-1"
                />
                <Button
                  text="2"
                  className="border w-10 h-10 rounded-full mx-1"
                />
                <Button
                  text="3"
                  className="border w-10 h-10 rounded-full mx-1"
                />
                <Button img={RightIcon} className="mx-1" />
              </div>
            </section>
            <ProductTable />
          </>
        )}
        {tab === "tab2" && <p>No yet Data</p>}
      </Layout>
    </>
  );
};

export default Product;
