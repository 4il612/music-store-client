import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import Player from "../components/Player";

interface Props {
	children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<NavBar />
			<Container style={{ margin: "90pt" }}>{children}</Container>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Player />
			</div>
		</>
	);
};

export default MainLayout;
