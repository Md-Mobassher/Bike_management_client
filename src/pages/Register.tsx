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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { useLoginMutation } from "@/redux/features/auth/authApi";
// import { setUser } from "@/redux/features/auth/authSlice";
// import { useAppDispatch } from "@/redux/hooks";
// import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  // const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        contactNo: data.contactNo,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth,
        presentAddress: data.presentAddress,
        permanentAddress: data.permanentAddress,
        file: data.file,
      };
      console.log(userInfo);
      // const res = await register(userInfo).unwrap();

      // const user = verifyToken(res.data.accessToken);
      // dispatch(setUser({ user: user, token: res.data.accessToken }));
      // toast.success("Logged in", { id: toastId, duration: 3000 });
      // navigate(`/`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
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
                <Select>
                  <SelectTrigger {...register("gender")} id="gender">
                    <SelectValue placeholder="Your Gender" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
                  {...register("file")}
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
