import { ITrack } from "../types/Track";
import { Card, IconButton, Grid } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";

type TrackItemProps = {
	track: ITrack;
	active?: boolean;
};

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
	const router = useRouter();

	return (
		<Card
			className={styles.track}
			onClick={() => router.push("/tracks/" + track._id)}
		>
			<IconButton onClick={(e) => e.stopPropagation()}>
				{!active ? <PlayArrow /> : <Pause />}
			</IconButton>
			<Image
				alt={track.title}
				width={70}
				height={70}
				src={track.preview}
			/>
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
			{active && <div>13:37 / 14:88</div>}
			<IconButton style={{ marginLeft: "auto" }}>
				<Delete />
			</IconButton>
		</Card>
	);
};

export default TrackItem;
