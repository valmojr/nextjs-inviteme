import TopMenu from "@/app/ui/dashboard/TopMenu/TopMenu";
import { Card } from "@/components/ui/card";

function LoggedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-0 w-full h-screen flex lg:flex-row justify-center items-center">
      <TopMenu/>
      {children}
    </div>
  );
}

export default LoggedLayout;
