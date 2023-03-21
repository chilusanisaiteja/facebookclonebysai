import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online"

export default function Rightbar({profile}) {


  const HomeRightComponent = () =>{
    return <>
     <div className="birthdayContainer">
            <img className="birthdayImg" src="/asserts/gift.png" alt=""/>
            <span className="birthdayText">
              <b>Pola Foster</b> and <b> 3 other friends </b> have a birthday today
            </span>
        </div>
        <img src="/asserts/ad.png" alt="" className="adImg"/>
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriends">
        {Users.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}
        </ul>
    </>
  }


  const ProfileRightPage = () => {
    return (<>
    <h4 className="rightbarTitle">User Information</h4>
   <div className="rightbarInfo">
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey">
        City:
      </span>
      <span className="rightbarValue">
        New York
      </span>
    </div>
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey">
        From:
      </span>
      <span className="rightbarValue">
        Madrit
      </span>
    </div>
    <div className="rightbarInfoItem">
      <span className="rightbarInfoKey">
        RelationShip:
      </span>
      <span className="rightbarValue">
        Single
      </span>
    </div>

   </div>
   <h4 className="rightbarTitle">User Friends</h4>
   <div className="rightbarFollowings">
    <div className="rightbarFollowing">
      <img className="rightbarFollowingImg" alt="" src="/asserts/person/1.jpeg"/>
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img className="rightbarFollowingImg" alt="" src="/asserts/person/2.jpeg"/>
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img className="rightbarFollowingImg" alt="" src="/asserts/person/3.jpeg"/>
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img className="rightbarFollowingImg" alt="" src="/asserts/person/4.jpeg"/>
      <span className="rightbarFollowingName">John Carter</span>
    </div>
    <div className="rightbarFollowing">
      <img className="rightbarFollowingImg" alt="" src="/asserts/person/5.jpeg"/>
      <span className="rightbarFollowingName">John Carter</span>
    </div><div className="rightbarFollowing">
      <img className="rightbarFollowingImg" alt="" src="/asserts/person/6.jpeg"/>
      <span className="rightbarFollowingName">John Carter</span>
    </div>
   </div>

    </>);
  }

  return (
    <div className="rightbar">
      <div className="rightbarWraper">
        { profile? 
       <ProfileRightPage/>:
       <HomeRightComponent/>}
      </div>
    </div>
  )
}
