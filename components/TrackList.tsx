import { Grid, Box } from "@mui/material"
import { ITrack } from "../types/Track"
import TrackItem from "./TrackItem"

interface TrackListProps{
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track} active={true}/>
                )}
            </Box>
        </Grid>
    )
}

export default TrackList