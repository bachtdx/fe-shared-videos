import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Share from "./pages/share";
import Cookies from "js-cookie";
import axios from "./utils/axiosUtils";
const { Content } = Layout;

interface User {
  token: string;
  email: string;
}
function App() {
  const [user, setUser] = useState<User>({
    token: "",
    email: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);
    const response = axios
      .post("/api/v1/validation_token", {})
      .then((response) => {
        console.log("Success:", response.data);
        setUser({
          token: token || "",
          email: response.data.userEmail,
        })
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <Layout>
      <Header user={user} setUser={setUser} />
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/share" element={<Share />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;
