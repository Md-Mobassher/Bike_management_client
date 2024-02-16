import { Toaster } from "sonner";
import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <Toaster />
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
