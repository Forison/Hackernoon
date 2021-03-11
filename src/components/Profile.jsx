import React from 'react';
import twitterIm from '../image/twitter-new.png';
import youtubeIm from '../image/youtube-new.png';
import PropTypes from 'prop-types';

const Profile = ({data}) => {
  return (
    <div className="profile d-flex">
      <img src={data.avatar} alt="profile"/>
      <div>
      <div className="ml-3 ml-lg-1">
        <h6 className="noon-border">@{data.displayName}</h6>
        <h6>{data.handle}</h6>
      </div>
      <div>
        <p className="ml-3 ml-lg-0">{data.bio}</p>
        <div className="d-flex ml-3 ml-lg-0">
          <a href={`https://twitter.com/${data.twitter}`} className="mr-2">
            <img src={twitterIm} alt="hackernoon-footer"/>
          </a>
          <a href={`https://www.youtube.com/${data.youtube}`}>
            <img src={youtubeIm} alt="hackernoon-footer"/>
          </a>
        </div>
      </div>
      </div>

    </div>
  )
}
Profile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Profile;