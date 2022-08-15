import MainLayout from "../../layout/MainLayout"
import { ITrack } from "../../types/Track"
import { Button, Grid, TextField } from "@mui/material"
import { useRouter } from "next/router"
import Image from "next/image"

const TrackPage = () => {
    const track: ITrack = {_id: '1', title: 'First title', author: 'first author', lyrics: 'first lyrics', listen_count: 0, preview:'/test.jpg', audio: 'kekw', comments: [{_id: '1', username: 'first comment username', text: 'first comment text'}, {_id: '2', username: 'first comment username', text: 'first comment second text'}]}
    const router = useRouter()

    return (
        <MainLayout>
            <Button 
                style={{
                    fontSize: 32
                }} 
                variant='outlined' 
                onClick={() => {router.push('/tracks')}}
            >
                To TrackList
            </Button>
            <Grid container style={{ margin: '20px 0'}}>
                <Image width={200} height={200} src={track.preview}/>
                <div style={{ marginLeft: 30}}>
                    <h1>Название - {track.title}</h1>
                    <h1>Исполнитель - {track.author}</h1>
                    <h1>Прослушиваний - {track.listen_count}</h1>
                </div>
            </Grid>
            <h1>Lyrics</h1>
            <p>{track.lyrics}</p>
            <h1>Comments</h1>
            <Grid container
                style={{
                    marginBottom: 20,
                }}
            >
                <TextField
                    label="Name"
                    fullWidth
                    style={{
                        marginBottom: 20,
                    }}
                />

                <TextField
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                    style={{
                        marginBottom: 20,
                    }}
                />
                <Button>Accept</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Autor - {comment.username} </div>
                        <div>Text - {comment.text} </div>
                    </div>    
                )}
            </div>
        </MainLayout>
    )
}

export default TrackPage