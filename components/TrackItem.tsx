import { ITrack }  from "../types/Track"
import {Card} from '@mui/material'

type TrackItemProps = {
    track: ITrack
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card>
            {track.title}
        </Card>
    )
}

export default TrackItem