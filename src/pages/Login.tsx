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
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 3000 });
      navigate(`/`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-[100vh] p-10"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/1z94XnJ/lino-9-Pna-Lbcier-E-unsplash-1.jpg)",
        backgroundSize: "cover",
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
            Login Into Bike Management Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  placeholder="Your Email"
                  {...register("email")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Your Password"
                  {...register("password")}
                />
              </div>

              <Button type="submit">Login</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-md">
            You are not register? Please{" "}
            <NavLink className="text-blue-500 font-semibold" to="/register">
              Register
            </NavLink>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
