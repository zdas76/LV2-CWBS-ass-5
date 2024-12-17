import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";

type TSelectProps = {
  name: string;
  label: string;
};

export default function CDatePicker({ name, label }: TSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <DatePicker
            style={{ width: "100%", marginBottom: "5px" }}
            {...field}
            
            minDate={dayjs(new Date())}
            maxDate={dayjs(new Date()).add(1, "month")}
            onChange={(date) => field.onChange(date ? dayjs(date).format("YYYY-MM-DD") : "")} 
            value={field.value ? dayjs(field.value) : null } 
            size="large"
          />
          {error && <span style={{ color: "red" }}> {error.message}</span>}
        </Form.Item>
      )}
    />
  );
}
