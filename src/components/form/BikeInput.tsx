import { Form } from "antd";
import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};

const BikeInput = ({
  type,
  name,
  label,
  disabled,
  placeholder,
}: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item
            label={label}
            className="font-semibold lg:mb-5 md:mb-4 mb-3"
          >
            <Input
              className="font-normal font-mono"
              {...field}
              type={type}
              id={name}
              size="large"
              placeholder={placeholder}
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BikeInput;
