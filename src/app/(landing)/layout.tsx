import Navbar from "@/components/partials/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen py-8">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default LandingLayout;
