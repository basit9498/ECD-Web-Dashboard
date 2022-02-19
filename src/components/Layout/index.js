import React from "react";
import Aside from "./aside";
import Header from "./header";

const Index = (props) => {
  return (
    <>
      <Header />
      <section className="flex">
        <aside className="w-1/6 h-screen bg-darkblue sticky top-0 pb-10 pt-14 px-6">
          <Aside />
        </aside>
        <div className="w-5/6 px-10 py-14">{props.children}</div>
      </section>
    </>
  );
};

export default Index;
