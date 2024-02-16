import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const BikeDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} className="font-semibold mb-5">
            <DatePicker
              {...field}
              size="large"
              style={{ width: "100%" }}
              className=" font-normal font-mono"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BikeDatePicker;
