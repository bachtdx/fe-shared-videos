import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/header";
const {  } = Layout;

interface User {
  token: string;
  email: string;
}
function App() {
  const [user, setUser] = useState<User>({token: "", email: ""});
  return (
    <Layout>
    <Header user={user} />
    
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/share" element={<Share />} /> */}
      </Routes>
    </BrowserRouter>
  </Layout>
  );
}

export default App;
