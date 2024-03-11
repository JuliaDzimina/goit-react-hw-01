import FriendsList from "./components/FriendsList/FriendsList";
import Profile from "./components/Profile/Profile";

import userData from "./data/userData.json";
import friends from "./data/friends.json";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
