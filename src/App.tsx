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
  const cableServerUrl = process.env.REACT_APP_CABLE_SERVER_URL || "http://localhost:3000/cable";
  const [api, contextHolder] = notification.useNotification();
  const [user, setUser] = useState<User>({
    token: "",
    email: "",
  });
  useEffect(() => {
    
    const cable = ActionCable.createConsumer(cableServerUrl);
    const channel = cable.subscriptions.create({channel: "NotificationChannel", user_id: user.email}, {
      received: function (data) {
        openNotification("success", `A new video shared by: ${data.shared_by}`, data.video_title);
      },
    });

    return () => {
      channel.unsubscribe();
    };
  }, [user.email]);
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
