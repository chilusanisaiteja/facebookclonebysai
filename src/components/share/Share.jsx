import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapher">
            <div className="shareTop">
                <img className="shareImg" src="asserts/person/1.jpeg" alt=""/>
                <input placeholder="What's in your mind Safak?" className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptiontext">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptiontext">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room  htmlColor="" clasgreensName="shareIcon"/>
                        <span className="shareOptiontext">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptiontext">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
