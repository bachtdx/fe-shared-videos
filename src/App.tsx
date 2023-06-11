import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, notification } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Share from "./pages/share";
import Cookies from "js-cookie";
import axios from "./utils/axiosUtils";
import ActionCable from "actioncable";
import openNotification from "./utils/notificationUtils";
const { Content } = Layout;

interface User {
  token: string;
  email: string;
}

function App() {
  const [api, contextHolder] = notification.useNotification();
  const [user, setUser] = useState<User>({
    token: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    const response = axios
      .post("/api/v1/validation_token", {})
      .then((response) => {
        setUser({
          token: token || "",
          email: response.data.userEmail,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    const channel = cable.subscriptions.create("NotificationChannel", {
      received: function(data) {
        openNotification("success", "Have new Video", data.video_title);
        console.log("Received message:", data);
      },
    });

    return () => {
      channel.unsubscribe();
    };
  }, []);
  return (
    <Layout>
      {contextHolder}
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <Content>
          <Routes>
            <Route path="/" element={<Home user={user} setUser={setUser} />} />
            <Route
              path="/share"
              element={<Share user={user} setUser={setUser} />}
            />
          </Routes>
        </Content>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
