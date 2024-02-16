import BikeDatePicker from "@/components/form/BikeDatePickers";
import BikeForm from "@/components/form/BikeForm";
import BikeInput from "@/components/form/BikeInput";
import BikeSelect from "@/components/form/BikeSelect";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { genderOptions, roleOptions } from "@/constant/global";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { TRegister } from "@/types/user.type";
import { Col, Divider, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating User");

    try {
      const formData = new FormData();
      // Append files to FormData
      for (const file of data.files) {
        formData.append("file", file);
      }

      const userInfo: TRegister = {
        name: data.name,
        email: data.email,
        password: data.password,
        contactNo: data.contactNo,
        gender: data.gender,
        role: data.role,
        dateOfBirth: data.dateOfBirth,
        presentAddress: data.presentAddress,
        permanentAddress: data.permanentAddress,
      };
      formData.append("data", JSON.stringify(userInfo));

      await registerUser(formData).unwrap();

      toast.success("User Created Successfull.", {
        id: toastId,
        duration: 3000,
      });
      navigate(`/login`);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Create User. Something went wrong", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center p-20 min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/1z94XnJ/lino-9-Pna-Lbcier-E-unsplash-1.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Registser into Bike Management Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Row justify="center">
            <Col span={24}>
              <BikeForm onSubmit={onSubmit}>
                <Divider className="text-xl font-semibold ">
                  Basic Info.
                </Divider>
                <Row gutter={16}>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="name"
                      label="Name"
                      placeholder="Your Name"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Your Email"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="password"
                      label="Password"
                      placeholder="Your Password"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="number"
                      name="contactNo"
                      label="Contact No"
                      placeholder="Your Contact No"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeSelect
                      label="Gender"
                      name="gender"
                      options={genderOptions}
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeSelect
                      label="Role"
                      name="role"
                      options={roleOptions}
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeDatePicker name="dateOfBirth" label="Date Of Birth" />
                  </Col>
                </Row>

                <Divider>Others Info.</Divider>

                <Row gutter={12}>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="presentAddress"
                      label="Present Address"
                      placeholder="Your Present Address"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="permanentAddress"
                      label="Permanent Address"
                      placeholder="Your Permanent Address"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="file"
                      name="files"
                      label="Profile Image"
                      placeholder="Select your image"
                    />
                  </Col>
                </Row>

                <Row gutter={24}>
                  <Col span={24} className="flex justify-center mt-5">
                    <Button className="bg-green-600" type="submit">
                      Register
                    </Button>
                  </Col>
                </Row>
              </BikeForm>
            </Col>
          </Row>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-md ">
            Already registered? Please{" "}
            <NavLink className="text-blue-500 font-semibold" to="/login">
              Login
            </NavLink>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
