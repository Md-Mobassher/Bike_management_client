import { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetSellHistoryQuery } from "@/redux/features/sell/sellApi";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const salesHistory = [
  {
    value: "daily",
    label: "Daily Sales",
  },
  {
    value: "weekly",
    label: "Weekly Sales",
  },
  {
    value: "monthly",
    label: "Monthly Sales",
  },
  {
    value: "yearly",
    label: "Yearly Sales",
  },
];

const SalesHistoryItem = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("daily");
  const { data, refetch } = useGetSellHistoryQuery(value);
  const navigate = useNavigate();
  const sells = data?.data;

  useEffect(() => {
    refetch();
  }, [value, refetch]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] bg-white text-black hover:bg-green-600 hover:text-white border-0"
        >
          {value
            ? salesHistory.find((item) => item.value === value)?.label
            : "Sales History"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Sales History..." />
          <CommandEmpty>No Sales History found.</CommandEmpty>
          <CommandGroup className="">
            {salesHistory.map((item) => (
              <CommandItem
                className=" bg-white text-black hover:bg-green-600 hover:text-white"
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  navigate("/sales-history", { state: { sells } });
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 bg-white text-black hover:bg-green-600 hover:text-white",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SalesHistoryItem;
