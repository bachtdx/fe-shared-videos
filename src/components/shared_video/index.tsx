import React, { useEffect, useState } from "react";

import { Row, Col, message } from "antd";
import "./index.scss";
import CardVideo from "./cardVideo";
import axios from "../../utils/axiosUtils";
import showMessage from "../../utils/messageUtils";
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
interface User {
  token: string;
  email: string;
}
interface HomeProps {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}
function SharedVideo({ user, setUser }: HomeProps) {
  const [videoData, setVideoData] = useState<Video[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    axios
      .get("/api/v1/videos")
      .then((response) => {
        console.log(response.data);
        setVideoData(response.data.shared_videos);
      })
      .catch((error) => {
        if (error.message.includes("401")) {
          showMessage("error", "Please log in again");
          setUser({
            token: "",
            email: "",
          });
        } else {
          console.error("Error:", error.message);
        }
      });
  }, []);
  return (
    <div>
      {contextHolder}
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
