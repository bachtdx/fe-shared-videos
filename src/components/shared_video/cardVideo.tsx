import React from "react";

import { Card, Typography, Row, Col } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import "./index.css";
import axios from "../../utils/axiosUtils";
import showMessage from "../../utils/messageUtils";
const { Meta } = Card;
const { Title, Text, Paragraph } = Typography;

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
interface CardVideoProps {
  video: Video;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}

function CardVideo({ video, user, setUser }: CardVideoProps) {
  const handleLike = () => {
    axios
      .post("/api/v1/videos/like", {video_id: video.id})
      .then((response) => {
        console.log(response.data);
        // setVideoData(response.data.shared_videos);
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
  };

  const handleDislike = () => {
    // Xử lý sự kiện dislike
  };
  return (
    <Card>
      <Row gutter={16}>
        <Col span={12}>
          <div>
            <iframe
              title="Embedded Video"
              width="100%"
              src={video.video_embed}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col span={12}>
          {/* {user.email ? <div>
          <LikeOutlined
              className="shared-video-up-like shared-card-btn-like"
              onClick={handleLike}
            />
            <DislikeOutlined
              className="shared-video-up-like shared-card-btn-dislike"
              onClick={handleDislike}
            />
            <Title className="shared-video-card-title" level={5}>
              {video.video_title}
            </Title>
            
          </div> : <div></div> } */}
          
          <div>
            <Text>Shared by:</Text>
            <Text style={{paddingLeft: 5}}>{video.shared_by}</Text>
          </div>
          <div >
            <Text>
              <LikeOutlined /> {video.video_like}
            </Text>
            <Text style={{paddingLeft: 10}}>
              <DislikeOutlined /> {video.video_dislike}
            </Text>
          </div>
          <div>
            <Text>Description:</Text> <br />
            {/* <Text>{video.video_description}</Text> */}
            <Paragraph ellipsis={{ rows: 2, expandable: true }}>
              {video.video_description}
            </Paragraph>  
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CardVideo;