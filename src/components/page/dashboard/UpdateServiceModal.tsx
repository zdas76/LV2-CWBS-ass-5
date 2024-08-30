import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";

export default function UpdateServiceModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        type="text"
        className="rounded-full size-10"
        onClick={() => setOpen(true)}
      >
        <EditOutlined />
      </Button>

      <Modal
        title="Add a service"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}
