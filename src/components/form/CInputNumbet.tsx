import { Form, InputNumber } from "antd";

import { Controller } from "react-hook-form";

type TInpueProps = {
  prefix?: string;
  name: string;
  label?: string;
};

export default function CInputNumber({ label, name, prefix }: TInpueProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <InputNumber
              {...field}
              id={name}
              size="large"
              style={{ width: "100%" }}
              min="1"
              step="0.00"
              prefix={prefix}
            />
            {error && <div className="text-red-300 ">{error.message}</div>}
          </Form.Item>
        )}
      />
    </div>
  );
}
