import React, { useState } from "react";
import { Layout, Row, Col, Button, Input, message } from "antd";
import { HomeFilled } from "@ant-design/icons";
import "./index.scss";

interface HeaderProps {
  user: {
    token: string;
    email: string;
  };
}

function Header({ user }: HeaderProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const handleInputChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleInputChangePassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };
  const onLoginAndRegister = () => {
    console.log(email);
    console.log(password);
    if (email === "" || password === "") {
      messageApi.open({
        type: 'warning',
        content: 'Email and Password cannot be blank',
      });
    }
  };
  const onLogout = () => {
    console.log("logout");
  };
  return (
    <Layout.Header className="shared-video-header">
      {contextHolder}
      <Row className="shared-video-row">
        <Col span={16} push={8}>
          {user.email ? (
            <Row className="shared-vide-row" justify="end">
              <span className="shared-video-span-welcome">
                Welcome {user.email}
              </span>
              <Button className="shared-video-button-share-movie">
                Share a movie
              </Button>
              <Button className="shared-video-button-logout" onClick={onLogout}>Logout</Button>
            </Row>
          ) : (
            <Row className="shared-video-row" justify="end">
              <Input
                placeholder="email"
                className="shared-video-input"
                onChange={handleInputChangeEmail}
                value={email}
              />
              <Input
                required
                type="password"
                placeholder="password"
                className="shared-video-input"
                onChange={handleInputChangePassword}
                value={password}
              />
              <Button
                className="shared-video-button-login"
                onClick={onLoginAndRegister}
              >
                Login / Register
              </Button>
            </Row>
          )}
        </Col>
        <Col span={8} pull={16}>
          <HomeFilled className="shared-video-logo" />{" "}
          <span className="shared-video-name-site">Funny Movies</span>
        </Col>
      </Row>
      <hr />
    </Layout.Header>
  );
}

export default Header;
