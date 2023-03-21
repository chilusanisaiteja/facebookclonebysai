import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <div>
       <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="/asserts/post/3.jpeg" alt="" className="profileTopImg"/>
                <img src="/asserts/person/7.jpeg" alt="" className="profileImg"/>
                </div>
                <div className="profileInfo">
                    <h4 className="profileUserName">sai teja</h4>
                    <span className="profileDesc">Hello guys!</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
        <Rightbar profile/>
            </div>
        </div>
      </div>
    </div>
  )
}
