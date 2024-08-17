import React from "react";
import { Copy } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";

interface DemoCredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success(`${text} Copied to clipboard`);
  });
};

const DemoCredentialModal: React.FC<DemoCredentialModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white pt-7 pb-10 lg:px-6 px-4 rounded-lg w-[95%] md:w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-7 right-6 hover:text-white px-4 py-2 border rounded-md border-gray-300 hover:bg-green-600 "
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-6 text-green-500">
          Demo Credentials
        </h2>

        <div className="mb-6">
          <h3 className="mb-4 text-xl font-bold underline">Seller:</h3>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p className="">Email: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 overflow-hidden rounded-lg gap-2 text-wrap">
              <p className="max-w-40">mobassherpautex@gmail.com</p>
              <button
                onClick={() => copyToClipboard("mobassherpautex@gmail.com")}
                className="focus:outline-none "
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Password: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>Mobassher123</p>
              <button
                onClick={() => copyToClipboard("Mobassher123")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold underline">Buyer:</h3>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Email: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>raiyan@gmail.com</p>
              <button
                onClick={() => copyToClipboard("raiyan@gmail.com")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 mb-2">
            <div className="w-[22%]">
              <p>Password: </p>
            </div>
            <div className="w-[75%] flex justify-between bg-gray-200 pl-4 text-primary-400 p-2 rounded-lg">
              <p>Raiyan123</p>
              <button
                onClick={() => copyToClipboard("Raiyan123")}
                className="focus:outline-none"
              >
                <Copy className="hover:text-green-500 cursor-pointer bg-gray-200" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Button
            className="bg-green-500 hover:bg-green-400 px-4 py-2"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoCredentialModal;
