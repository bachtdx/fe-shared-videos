import React from "react";

import { Card, Typography, Avatar, Button, Row, Col } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import "./index.scss";
const { Meta } = Card;
const { Title, Text } = Typography;

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
interface CardVideoProps {
  video: Video;
  user: {
    token: string;
    email: string;
  };
}

function CardVideo({ video, user }: CardVideoProps) {
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
          {user.email ? <div>
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
            
          </div> : <div></div> }
          
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
            <Text>{video.video_description}</Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CardVideo;