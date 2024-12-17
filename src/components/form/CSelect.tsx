import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; desibled?: boolean }[] | undefined;
  disabled?: boolean;
  placeholder?:string;
};
export default function CSelect({
  label,
  name,
  options,
  placeholder,
  disabled,
}: TSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%", marginBottom: "5px" }}
            {...field}
            options={options}
            disabled={disabled}
            size="large"
            placeholder={placeholder}
          />
          {error && <span style={{ color: "red" }}> {error.message}</span>}
        </Form.Item>
      )}
    />
  );
}
