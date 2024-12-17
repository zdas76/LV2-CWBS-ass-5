import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

import { Controller } from "react-hook-form";

type TInpueProps = {
  name: string;
  label?: string;
};

export default function CTextArea({ label, name }: TInpueProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <TextArea
              {...field}
              id={name}
              placeholder="Please put full address"
              maxLength={250}
            />
            {error && <div className="text-red-300">{error.message}</div>}
          </Form.Item>
        )}
      />
    </div>
  );
}
