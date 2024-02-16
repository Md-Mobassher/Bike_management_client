import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { TRegister } from "@/types/user.type";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

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
      className="flex justify-center items-center p-20"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/1z94XnJ/lino-9-Pna-Lbcier-E-unsplash-1.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Card className="w-[360px]">
        <CardHeader>
          <CardTitle
            style={{
              paddingBottom: "10px",
              fontSize: "28px",
              lineHeight: "40px",
              fontWeight: 600,
            }}
          >
            Registser into Bike Management Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name")}
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  id="password"
                  placeholder="Your Password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="contactNo">Contact Number</Label>
                <Input
                  type="number"
                  id="contactNo"
                  placeholder="Your Contact Number"
                  {...register("contactNo")}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <select
                  className="input border rounded-lg p-2"
                  {...register("gender", { required: true })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  type="date"
                  id="dateOfBirth"
                  placeholder="Your Date of Birth"
                  {...register("dateOfBirth")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="presentAddress">Present Address</Label>
                <Input
                  {...register("presentAddress")}
                  id="presentAddress"
                  placeholder="Your Present Address"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="permanentAddress">Permanent Address</Label>
                <Input
                  id="permanentAddress"
                  placeholder="Your Permanent Address"
                  {...register("permanentAddress")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="file">Profile Image</Label>
                <Input
                  type="file"
                  {...register("files")}
                  id="file"
                  placeholder="Your Profile Image"
                />
              </div>
              <Button type="submit">Register</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-md">
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
