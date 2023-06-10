import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Share from "./pages/share";
const { Content } = Layout;

interface User {
  token: string;
  email: string;
}
function App() {
  const [user, setUser] = useState<User>({
    token: "a",
    email: "tdxbach@gmail.com",
  });
  return (
    <Layout>
      <Header user={user} />
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
