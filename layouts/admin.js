
import SidebarType from "components/sidebar";

const Layout = ({ children }) => {

  /* render default layout */
  return (
    <SidebarType>
         {children}
    </SidebarType>

  );
};

export default Layout;
