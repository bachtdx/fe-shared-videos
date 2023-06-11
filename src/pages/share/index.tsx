import React from "react";
import Share from "../../components/share";


interface User {
    token: string;
    email: string;
  }
  interface ShareProps {
    setUser: React.Dispatch<React.SetStateAction<User>>;
    user: User;
  }
function Index({ user, setUser }: ShareProps) {
    return (
        <div>
            <Share user={user} setUser={setUser}/>
        </div>
    );
}

export default Index;