import { Container } from "@mui/material";
import NavBar from "../components/NavBar";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container
        style={{
          marginTop: 100,
          padding: 20,
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
