import { Form, Input } from "antd";

import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

type TInpueProps = {
  type: string;
  name: string;
  label?: string;
};

export default function CInput({ label, name, type }: TInpueProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
            {error && <div className="text-red-300">{error.message}</div>}
          </Form.Item>
        )}
      />
    </div>
  );
}
