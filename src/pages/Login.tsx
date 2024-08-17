import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import DemoCredentialModal from "@/components/ui/DemoCredentialModal";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "") {
      setErrorMessage("Please enter your password.");
      return;
    }

    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        email: email,
        password: password,
      };
      const res = await login(userInfo).unwrap();
      if (res.success) {
        setEmail("");
        setPassword("");
        setErrorMessage("");
      }

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));

      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Failed to log in. Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-[100vh] lg:p-10 p-4 md:p-8"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/1z94XnJ/lino-9-Pna-Lbcier-E-unsplash-1.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Card className="w-[94%] md:max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-500">
            Login to Bike Management Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              className="p-2 mt-2 w-full outline-none rounded-md border border-gray-300 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="p-2 mt-2 w-full outline-none rounded-md border border-gray-300 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <Toaster richColors position="top-right" closeButton />
          <div className="flex justify-between mt-7">
            <Button
              className="bg-green-500 hover:bg-green-400"
              onClick={() => setIsModalOpen(true)}
            >
              Demo Credential
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-400"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-md text-center">
            You are not registered? Please{" "}
            <NavLink className="text-green-500 font-semibold" to="/register">
              Register
            </NavLink>
          </p>
        </CardFooter>
      </Card>

      <DemoCredentialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Login;
