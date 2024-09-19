import React from "react";
import { Card, Button, Input } from "antd";
const { TextArea } = Input;

const TablePage1 = () => (
  <div className="flex flex-col justify-end space-y-4">
    <div className="flex justify-end">
      <Button className="primary">Cập nhật</Button>
    </div>
    <div className="grid grid-cols-2 gap-10 ">
      <Card title="Lời tác giả" bordered={true} style={{ width: 600 }}>
        <TextArea rows={4} />
      </Card>
      <Card title="Quỹ từ thiện" bordered={true} style={{ width: 600 }}>
        <TextArea rows={4} />
      </Card>
      <Card
        title="Nhận xét từ chuyên gia"
        bordered={true}
        style={{ width: 600 }}
      >
        <TextArea rows={4} />
      </Card>
      <Card title="Video" bordered={true} style={{ width: 600, height: 150 }}>
        <Input placeholder="link youtube" />
      </Card>
      <Card title="Lời tác giả" bordered={true} style={{ width: 600 }}>
        <TextArea rows={4} />
      </Card>
    </div>
  </div>
);

export default TablePage1;
