import React from "react";

import { Card, Row, Col, Typography, Avatar } from "antd";
import "./index.scss";
import CardVideo from "./cardVideo";
interface Video {
  id: number;
  title: string;
  url: string;
  shared_By: string;
  likes: number;
  dislikes: number;
  description: string;
}

const videoData: Video[] = [
  {
    id: 1,
    title: "NGƯỜI NHƯ ANH | MAI TIẾN DŨNG | OFFICIAL MV",
    url: "video-url-1",
    shared_By: "John Doe",
    likes: 100,
    dislikes: 50,
    description: "Description for Video 1",
  },
  {
    id: 2,
    title: "Video 2",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  {
    id: 3,
    title: "Video 3",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  {
    id: 4,
    title: "Video 4",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  {
    id: 5,
    title: "Video 5",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  {
    id: 6,
    title: "Video 6",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  {
    id: 7,
    title: "Video 7",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  {
    id: 8,
    title: "Video 8",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  {
    id: 9,
    title: "Video 9",
    url: "video-url-2",
    shared_By: "Jane Smith",
    likes: 200,
    dislikes: 75,
    description: "Description for Video 2",
  },
  // Add more video data as needed
];
interface SharedVideoProps {
  user: {
    token: string;
    email: string;
  };
}
function SharedVideo({ user }: SharedVideoProps) {
  return (
    <div>
      {videoData.map((video) => (
        <Row>
          <Col xl={{offset: 6, span: 12}} xxl={{offset: 6, span: 12}} lg={{offset: 6, span: 12}} md={{offset: 6, span: 12}}>
            <CardVideo user={user} video={video} />
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default SharedVideo;
