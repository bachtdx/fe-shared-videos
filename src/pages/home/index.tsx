import React from "react";
import SharedVideo from "../../components/shared_video";
interface HeaderProps {
  user: {
    token: string;
    email: string;
  };
}

function Home({user}: HeaderProps) {
  return <div>
    <SharedVideo user={user}/>
  </div>;
};

export default Home;
