"use client";

import DevicesDetails from "./ourDevice";
import PropertyComponent from "./specific-product";

function Properties() {
  return (
    <section className="mb-10">
      <div className="mx-auto gap-5 p-4">
        <div className="grid grid-cols-1 gap-4 lg:gap-14 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <PropertyComponent />
          </div>
          <div>
            <PropertyComponent />
          </div>
          <div>
            <PropertyComponent />
          </div>
          <div>
            <PropertyComponent />
          </div>
          <div>
            <PropertyComponent />
          </div>
          <div>
            <PropertyComponent />
          </div>
        </div>
        {/* "text-xl font-semibold text-white bg-slate-600 p-10 text-center" */}
      </div>
      <DevicesDetails />
    </section>
  );
}

export default Properties;
