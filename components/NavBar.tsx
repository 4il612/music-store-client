import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/router";
import Player from "./Player";

const drawerWidth = 240;

type menuItem = {
	text: string;
	href: string;
};

const menuItems: menuItem[] = [
	{ text: "Home", href: "/" },
	{ text: "Tracks", href: "/tracks" },
	{ text: "Albums", href: "/albums" },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function NavBar() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						music-store
					</Typography>
					<div
						style={{
							position: "absolute",
							right: "8pt",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Player />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<List>
					{menuItems.map((item, index) => (
						<ListItem key={item.text} disablePadding>
							<ListItemButton
								onClick={() => router.push(item.href)}
							>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<InboxIcon />
									) : (
										<MailIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<div
					style={{
						position: "absolute",
						bottom: 0,
						width: "100%",
					}}
				>
					<Divider />
					<List>
						{["About us", "Become a partner"].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
		</Box>
	);
}
