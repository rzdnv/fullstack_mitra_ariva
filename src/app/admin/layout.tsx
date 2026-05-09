import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout>
      <main className="px-10 py-5">{children}</main>
    </AdminLayout>
  );
}
