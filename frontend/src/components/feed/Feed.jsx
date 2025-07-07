import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { posts } from "../../data/posts"; // Assuming posts data is imported from a file
const Feed = () => {
  return (
    <div className="feed">
      <div className="wrapper">
        {/* Feed content goes here */}
        <Share />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
