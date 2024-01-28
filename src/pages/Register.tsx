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

const Register = () => {
  return (
    <div
      className="flex justify-center items-center h-[100vh] "
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
            Registser into Bike Management Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Your Password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="contactNo">Contact Number</Label>
                <Input
                  type="number"
                  id="contactNo"
                  placeholder="Your Contact Number"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger id="gender">
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
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="presentAddress">Present Address</Label>
                <Input id="presentAddress" placeholder="Your Present Address" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="permanentAddress">Permanent Address</Label>
                <Input
                  id="permanentAddress"
                  placeholder="Your Permanent Address"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="file">Profile Image</Label>
                <Input type="file" id="file" placeholder="Your Profile Image" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
