import { FC } from "react";

//components
import { Header } from "../Header";
import { Footer } from "../Footer";

//types
import { PropsLayout } from "./types";

const Layout: FC<PropsLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen	">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
