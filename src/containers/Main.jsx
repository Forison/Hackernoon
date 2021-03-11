import React from 'react';
import store from '../store/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import HtmlToReactParser from 'html-to-react';
import timeConv from '../util/TimeConv';
import heart from '../image/heart.png';
import light from '../image/light.png';
import boat from '../image/boat.png';
import money from '../image/money.png';
import Profile from '../components/Profile';

const Main = () => {
  const htmlToReactParser = new HtmlToReactParser.Parser();
  console.log(store)
  return (
    <>
      <h1 className="text-center text-sm">
        {store.title}
        <div className="d-flex justify-content-between align-items-center col-11 mx-auto">
          <small className="text-small">{timeConv(store.publishedAt)} 
           <span className="fa fa-star ml-2 paint p-2"><strong> 323 reads</strong></span> <i className="fa fa-bookmark ml-2"></i> 
          </small>
          <div className="float-right d-flex pr-3">
            <small className="text-small">11</small>
            <img src={heart} alt="hackernoon-footer"/>
            <img src={light} alt="hackernoon-footer"/>
            <img src={boat} alt="hackernoon-footer"/>
            <img src={money} alt="hackernoon-footer"/>
          </div>
        </div>
      </h1>
      <img src={store.mainImage} alt="hackernoon"/>
      <div className="position-absolute"><Profile data={store.profile}/></div>
      <>{htmlToReactParser.parse(store.markup)}</>
      <div className="related">
        <h1 className="text-center">Related</h1>
        <div className="row">
        {store.relatedStories.map((record,index)=>
          <div className="col-4" key={index}>
            <div className="my-card p-0">
              <div className="top">
                <h5 className="card-title">{record.text? record.text : record.title}</h5>
              </div>
              <div className="my-card-img top">
                <h6 className="text-center">{record.reactionsCount} reactions</h6>
                <img className="img-fluid p-0" src={record.image? record.image : record.mainImage} 
                alt="hackernoon" />
              </div>
              <div className="card-bottom d-flex justify-content-between align-items-center">
                <div className="profile-img">
                  {/* <img src={record.profile.avatar} alt="hackernoon"/> */}
                </div>
                {/* <h3 className="profile-info">{record.profile.displayName}</h3> */}
                <div className="profile-img"></div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      <div className="tags">
        <h1 className="text-center">Tags</h1>
        <div className="row">
          {store.tags.map((record,index) =>
          <div className="col-auto p-1" key={index}>
            <h3 className="custom-border p-1">#{record}</h3>
          </div>
          )}
        </div>
      </div>

      <div className="join-noon col-5 mx-auto text-center p-3 mt-3 hackernoon-color">
        Join hacker noon
      </div>

      <p className="text-center mini-text">Create your free account to unlock your custom reading experience.</p>

    </>
  )
}
export default Main;
