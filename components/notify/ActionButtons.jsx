"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { notifySuccess } from "@/components/notify/NotificationToast";

// 🚀 Dashboard Button
export const DashboardButton = () => {
  const router = useRouter();

  const handleClick = () => {
    notifySuccess("Redirecting to dashboard...");
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <LayoutDashboard size={18} />
      <span className="hidden md:inline">Dashboard</span>
    </Button>
  );
};

// 📝 Add Transaction Button
export const AddTransactionButton = () => {
  const router = useRouter();

  const handleClick = () => {
    notifySuccess("Redirecting to transaction form...");
    setTimeout(() => {
      router.push("/transaction/create");
    }, 1000);
  };

  return (
    <Button className="flex items-center gap-2" onClick={handleClick}>
      <PenBox size={18} />
      <span className="hidden md:inline">Add Transaction</span>
    </Button>
  );
};
