import React, { useState } from "react";
import { Input, Button, Row, Col, message } from "antd";
import "./index.scss";
import isYouTubeLink from "../../utils/youtubeUtils";
import showMessage from "../../utils/messageUtils";
import axios from "../../utils/axiosUtils";
// import { useNavigate } from "react-router-dom";

interface User {
  token: string;
  email: string;
}
interface ShareProps {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}
function Index({ user, setUser }: ShareProps) {
  const [url, setUrl] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  // const navigate = useNavigate();
  const handleInputChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  const handleClick = () => {
    if (isYouTubeLink(url)) {
      const paramsUser = {
        id: url,
      };
      axios
        .post("/api/v1/videos/shared_video", paramsUser)
        .then((response) => {
          console.log("Success:", response.data);
          showMessage("success", response.data.message);
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
    } else {
      showMessage("error", "Invalid URL");
    }
  };
  return (
    <div>
      <Row>
        {contextHolder}
        <Col
          xl={{ offset: 7, span: 10 }}
          xxl={{ offset: 9, span: 6 }}
          lg={{ offset: 7, span: 10 }}
          md={{ offset: 7, span: 12 }}
          sm={{ offset: 7, span: 12 }}
          xs={{ offset: 2, span: 20 }}
        >
          <fieldset>
            <legend>Share a Youtube movie</legend>

            <div
              style={{
                marginBottom: 20,
                marginTop: 20,
              }}
            >
              <Row>
                <Col span={8} style={{ paddingTop: 8 }}>
                  <span>Youtube URL:</span>
                </Col>
                <Col span={16}>
                  <Input
                    required={true}
                    onChange={handleInputChangeUrl}
                    value={url}
                  />
                </Col>
                <Col span={8}></Col>
                <Col span={16}>
                  <Button
                    style={{ width: "100%", marginTop: 30 }}
                    onClick={handleClick}
                  >
                    Share
                  </Button>
                </Col>
              </Row>
            </div>
          </fieldset>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
