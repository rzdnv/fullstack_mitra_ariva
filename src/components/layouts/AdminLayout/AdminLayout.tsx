import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { TooltipProvider } from "@/components/ui/tooltip";

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <AdminHeader />
          <main className="min-h-screen flex-1 bg-gray-50 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
