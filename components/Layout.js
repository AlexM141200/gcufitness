import NavBar from "./NavBar";
import { Box } from "./Box";

const Layout = ({ children }) => {
  return (
    <Box
      css={{
        maxW: "100%"
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
