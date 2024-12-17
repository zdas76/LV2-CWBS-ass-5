import { Form, Input } from "antd";

import { Controller } from "react-hook-form";


type TInpueProps = {
  type: string;
  name: string;
  label?: string;
  disabled?:boolean;
  addonBefore?:string;
  placeholder?: string
};

export default function CInput({ label, name, type, disabled, addonBefore, placeholder }: TInpueProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" disabled={disabled} addonBefore={addonBefore} placeholder={placeholder} />
            {error && <div className="text-red-300">{error.message}</div>}
          </Form.Item>
        )}
      />
    </div>
  );
}
