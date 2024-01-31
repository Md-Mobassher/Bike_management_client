import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-1/3">
      <Button
        className=" text-green-600 bg-white text-xl font-semibold"
        type="primary"
        icon={<PoweroffOutlined className="" />}
        loading
      >
        Loading
      </Button>
    </div>
  );
};

export default Loading;
