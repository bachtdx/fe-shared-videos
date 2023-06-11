import React from "react";
import SharedVideo from "../../components/shared_video";

interface User {
  token: string;
  email: string;
}
interface HomeProps {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
}

function Home({user, setUser}: HomeProps) {
  return <div>
    <SharedVideo user={user} setUser={setUser}/>
  </div>;
};

export default Home;
