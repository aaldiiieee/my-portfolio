import { Navbar, Footer } from "@/components/partials";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen py-8">
      <Navbar />
      <main className="flex-1 my-8">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
