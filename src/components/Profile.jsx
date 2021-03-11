import React from 'react';
import twitterIm from '../image/twitter-new.png';
import youtubeIm from '../image/youtube-new.png';

const Profile = ({data}) => {
  return (
    <div className="profile">
      <img src={data.avatar} alt="profile"/>
      <h6 className="noon-border">@{data.displayName}</h6>
      <h6>{data.handle}</h6>
      <p>{data.bio}</p>
      <div className="d-flex">
        <a href={`https://twitter.com/${data.twitter}`} className="mr-2">
          <img src={twitterIm} alt="hackernoon-footer"/>
        </a>
        <a href={`https://www.youtube.com/${data.youtube}`}>
          <img src={youtubeIm} alt="hackernoon-footer"/>
        </a>
      </div>
    </div>
  )
}
export default Profile;