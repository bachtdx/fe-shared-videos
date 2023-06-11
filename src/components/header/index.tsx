import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axiosUtils";
import Cookies from "js-cookie";
import { Layout, Row, Col, Button, Input, message } from "antd";
import { HomeFilled } from "@ant-design/icons";
import showMessage from "../../utils/messageUtils";
import "./index.scss";

interface User {
  token: string;
  email: string;
}
interface HeaderProps {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}

function Header({ user, setUser }: HeaderProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
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
      showMessage("warning", "Email and Password cannot be blank");
    } else {
      const paramsUser = {
        email: email,
        password: password,
      };
      axios
        .post("/api/v1/login", paramsUser)
        .then((response) => {
          console.log("Success:", response.data);
          setUser({
            token: response.data.token,
            email: response.data.userEmail,
          });
          Cookies.set("token", response.data.token);
          showMessage("success", "Login / Register successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const onLogout = () => {
    console.log("logout");
    axios
      .delete("/api/v1/logout", {})
      .then((response) => {
        console.log("Success:", response.data);
        setUser({
          token: "",
          email: "",
        });
        Cookies.set("token", "");
        showMessage("success", response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleShareClick = () => {
    navigate("/share");
  };
  const handleHomeClick = () => {
    navigate("/");
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
              <Button
                className="shared-video-button-share-movie"
                onClick={handleShareClick}
              >
                Share a movie
              </Button>
              <Button className="shared-video-button-logout" onClick={onLogout}>
                Logout
              </Button>
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
          <div onClick={handleHomeClick} style={{ cursor: "pointer" }}>
            <HomeFilled className="shared-video-logo" />{" "}
            <span className="shared-video-name-site">Funny Movies</span>
          </div>
        </Col>
      </Row>
      <hr />
    </Layout.Header>
  );
}

export default Header;
