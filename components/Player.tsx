import { Pause, PlayArrow } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/Track";
import TrackProgress from "./TrackProgress";

const Player = () => {
	const track: ITrack = {
		_id: "1",
		title: "First title",
		author: "first author",
		lyrics: "first lyrics",
		listen_count: 0,
		preview: "/test.jpg",
		audio: "kekw",
		comments: [
			{
				_id: "1",
				username: "first comment username",
				text: "first comment text",
			},
			{
				_id: "2",
				username: "first comment username",
				text: "first comment second text",
			},
		],
	};
	const active = false;

	return (
		<div className={styles.player}>
			<IconButton onClick={(e) => e.stopPropagation()}>
				{!active ? <PlayArrow /> : <Pause />}
			</IconButton>
			<Grid
				container
				direction="column"
				style={{
					width: 200,
					margin: "0 20px",
				}}
			>
				<div>{track.title}</div>
				<div
					style={{
						fontSize: 14,
						color: "gray",
					}}
				>
					{track.author}
				</div>
			</Grid>
			<TrackProgress left={0} right={100} onChange={() => {}} />
		</div>
	);
};

export default Player;
