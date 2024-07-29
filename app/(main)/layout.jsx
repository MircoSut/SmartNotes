import MainNavbar from "@/components/MainNavbar";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
}
