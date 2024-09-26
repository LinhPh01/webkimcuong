"use client";

import React from "react";
// import { Button } from "antd";
import PriceUpdate from "./priceupdate";

const TablePage1 = () => {
  return (
    <div className="flex flex-col justify-end space-y-4">
      {/* <div className="flex justify-end">
        <Button className="primary">Cập nhật</Button>
      </div> */}
      <div className="grid grid-cols-2 gap-10">
        <PriceUpdate />
      </div>
    </div>
  );
};

export default TablePage1;
