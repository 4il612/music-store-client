import { Grid, Card, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layout/MainLayout";
import { ITrack } from "../../types/Track";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: "2",
      title: "Second title",
      author: "second author",
      lyrics: "second lyrics",
      listen_count: 0,
      preview: "/test.jpg",
      audio: "kekw",
      comments: [
        {
          _id: "1",
          username: "second comment username",
          text: "second comment text",
        },
        {
          _id: "2",
          username: "second comment username",
          text: "second comment second text",
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card
          style={{
            width: 900,
          }}
        >
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track list</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Load
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
