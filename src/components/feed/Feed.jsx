import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from  "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapher">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
        <Post/>
      </div>
    </div>
  )
}
