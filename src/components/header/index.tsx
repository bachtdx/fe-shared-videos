import React from "react";
import { Layout, Row, Col, Button, Input } from "antd";
import { HomeFilled } from "@ant-design/icons";
import "./index.scss";

interface HeaderProps {
  user: {
    token: string;
    email: string;
  };
}

function Header({ user }: HeaderProps) {
  return (
    <Layout.Header className="shared-video-header">
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
              <Button className="shared-video-button-logout">Logout</Button>
            </Row>
          ) : (
            <Row className="shared-video-row" justify="end">
              <Input placeholder="email" className="shared-video-input" />
              <Input
                type="password"
                placeholder="password"
                className="shared-video-input"
              />
              <Button className="shared-video-button-login">
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
