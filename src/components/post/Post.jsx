import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
    
    const [like, setLike]= useState(post?.like);
    const [isLiked, setIsLiked] = useState(false);

    const ishandleLike = () =>{
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked);
    }

  return (
    <div className="post">
        <div className="postWrapher">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post?.userId)[0]?.profilePicture} alt="" className="posttopLeftImg"/>
                    <span className="postUserName">{Users.filter(u=>u.id === post?.userId)[0]?.username}</span>
                    <span className="postDate">{post?.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert className="postTopRightIcon"/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postCenterText">{post?.desc}</span>
                <img src={post?.photo} alt="" className="postImg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/asserts/like.png" alt="" onClick={ishandleLike} className="postLikeIcon"/>
                    <img src="/asserts/heart.png" alt="" onClick={ishandleLike} className="postHeartIcon"/>
                    <span className="postLikeCounter">{like} peple like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post?.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
