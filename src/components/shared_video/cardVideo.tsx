import React from "react";

import { Card, Typography, Avatar, Button, Row, Col } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import "./index.scss";
const { Meta } = Card;
const { Title, Text } = Typography;

interface Video {
  id: number;
  title: string;
  url: string;
  shared_By: string;
  likes: number;
  dislikes: number;
  description: string;
}
interface CardVideoProps {
  video: Video;
  user: {
    token: string;
    email: string;
  };
}

function CardVideo({ video }: CardVideoProps) {
  const handleLike = () => {
    // Xử lý sự kiện like
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
              src={"https://www.youtube.com/embed/SlGnZDI9HVg"}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col span={12}>
          <div>
          <LikeOutlined
              className="shared-video-up-like shared-card-btn-like"
              onClick={handleLike}
            />
            <DislikeOutlined
              className="shared-video-up-like shared-card-btn-dislike"
              onClick={handleDislike}
            />
            <Title className="shared-video-card-title" level={4}>
              {video.title}
            </Title>
            
          </div>
          <div>
            <Text strong>Shared by:</Text>
            <Text>{video.shared_By}</Text>
          </div>
          <div >
            <Text>
              <LikeOutlined /> {video.likes}
            </Text>
            <Text>
              <DislikeOutlined /> {video.dislikes}
            </Text>
          </div>
          <div>
            <Text>Description:</Text> <br />
            <Text>{video.description}</Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CardVideo;