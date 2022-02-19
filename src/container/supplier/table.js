import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Dots from "../../assets/images/dots.svg";
import { Link } from "react-router-dom";

const Table = () => {
  const tableData = [0, 1, 2];
  return (
    <>
      <section className="mt-10">
        <table className="w-full border-separate rounded-sm organization__table">
          <thead>
            <tr className=" text-left ">
              <th className="text-darkblue text-base font-bold py-3 px-5">
                Name
              </th>
              <th className="text-darkblue text-base font-bold py-3 px-5">
                Area
              </th>
              <th className="text-darkblue text-base font-bold py-3 px-5">
                Address
              </th>
              <th className="text-darkblue text-base font-bold py-3 px-5">
                City
              </th>
              <th className="text-darkblue text-base font-bold py-3 px-5">
                Country
              </th>
              <th className="text-darkblue text-base font-bold py-3 px-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((items, index) => {
              return (
                <tr className="boxShadow mb-2" key={index}>
                  <td className="text-litegray text-base p-5">Ali</td>
                  <td className="text-litegray text-base p-5">Area</td>
                  <td className="text-litegray text-base p-5">Peshawar </td>
                  <td className="text-litegray text-base p-5">New York</td>
                  <td className="text-litegray text-base p-5">Pakistan</td>
                  <td className="text-litegray text-base p-5">
                    <Menu as="div" className="relative inline-block text-left ">
                      <div>
                        <Menu.Button className="">
                          <img src={Dots} />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 bg-white rounded-md shadow border z-20">
                          <div className="py-1">
                            <ul>
                              <Link
                                to="#"
                                className="block py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                              >
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="block py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                              >
                                Delete
                              </Link>
                              <Link
                                to="/product"
                                className="block py-1.5 px-2.5 text-sm font-medium transition-all duration-300 text-litegray hover:text-secondry hover:bg-darkblue"
                              >
                                Product
                              </Link>
                            </ul>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
