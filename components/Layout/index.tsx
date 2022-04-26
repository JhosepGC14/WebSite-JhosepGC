import Header from "../Header/index";
import Footer from "../Footer/index";

interface PropsLayout {
  children : React.ReactNode
}

const Layout = ({ children }: PropsLayout) => {
  return (
    <>
      <Header />
      <main className="min-h-screen	">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
