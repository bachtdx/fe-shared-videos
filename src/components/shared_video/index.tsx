import React, { useEffect, useState } from "react";

import { Card, Row, Col, Typography, Avatar } from "antd";
import "./index.scss";
import CardVideo from "./cardVideo";
import axios from "../../utils/axiosUtils";
interface Video {
  id: number;
  user_id: number;
  video_id: string;
  video_title: string;
  video_embed: string;
  shared_by: string;
  video_like: number;
  video_dislike: number;
  video_description: string;
}
interface SharedVideoProps {
  user: {
    token: string;
    email: string;
  };
}
function SharedVideo({ user }: SharedVideoProps) {
  const [videoData, setVideoData] = useState<Video[]>([]);
  useEffect(() => {
    axios
      .get("/api/v1/videos")
      .then((response) => {
        console.log(response.data);
        setVideoData(response.data.shared_videos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
      {videoData.map((video) => (
        <Row>
          <Col
            xl={{ offset: 6, span: 12 }}
            xxl={{ offset: 6, span: 12 }}
            lg={{ offset: 6, span: 12 }}
            md={{ offset: 6, span: 12 }}
          >
            <CardVideo user={user} video={video} />
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default SharedVideo;
