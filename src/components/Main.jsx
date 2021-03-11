import React from 'react';
import HtmlToReactParser from 'html-to-react';
import timeConv from '../util/TimeConv';
import heart from '../image/heart.png';
import light from '../image/light.png';
import boat from '../image/boat.png';
import money from '../image/money.png';
import Profile from './Profile';

const Main = ({store}) => {
  const htmlToReactParser = new HtmlToReactParser.Parser();

  return (
    <>
      <h1 className="text-center text-sm">
        {store.title}
        <div className="row mt-3 mt-lg-none justify-content-between align-items-center col-12 col-lg-11 mx-auto">
          <small className="text-small">{timeConv(store.publishedAt)} 
           <span className="fa fa-star ml-2 paint p-2"><strong> 323 reads</strong></span> <i className="fa fa-bookmark ml-2"></i> 
          </small>
          <div className="float-right ml-auto ml-lg-none mt-3 mt-lg-none d-flex pr-3">
            <small className="text-small">11</small>
            <img src={heart} alt="hackernoon-footer"/>
            <img src={light} alt="hackernoon-footer"/>
            <img src={boat} alt="hackernoon-footer"/>
            <img src={money} alt="hackernoon-footer"/>
          </div>
        </div>
      </h1>
      <img src={store.mainImage} alt="hackernoon"/>
      <div className="d-none d-sm-none d-md-block d-lg-block position-absolute"><Profile data={store.profile}/></div>
      <div className="d-block d-sm-none d-md-none d-lg-none"><Profile data={store.profile}/></div>
      <>{htmlToReactParser.parse(store.markup)}</>
      <div className="related">
        <h1 className="text-center">Related</h1>
        <div className="row">
        {store.relatedStories.map((record,index)=>
          <div className="col-12 col-lg-4" key={index}>
            <div className="my-card p-0">
              <div className="top">
                <h5 className="card-title">{record.text? record.text : record.title}</h5>
              </div>
              <div className="my-card-img top">
                <h6 className="text-center">{record.reactionsCount} reactions</h6>
                <img className="img-fluid p-0" src={record.image? record.image : record.mainImage} 
                alt="hackernoon" />
              </div>
              <div className="card-bottom d-flex align-items-center">
                {record.profile ?
                <>
                <div className="profile-bottom-img ml-2 noon-shadow">
                  <img src={record.profile.avatar} alt="hackernoon"/>
                </div>
                <h3 className="profile-info ml-2">
                  <small className="noon-border">@{record.profile.displayName}</small>
                  <br/>
                  {record.profile.handle}
                </h3>
                </>
                :
                <>
                <div className="mini-text-1 ml-2">
                  <a href={record.link}> Visit hacker Earth</a>
                  <br />
                  <span>{record.link}</span>
                </div>
                <div className="promoted ml-auto">Promoted</div>
                </> 
                }
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

      <div className="join-noon d-none d-md-block d-lg-block col-5 mx-auto text-center p-3 mt-3 hackernoon-color">
        Join hacker noon
      </div>

      <p className="text-center mini-text">Create your free account to unlock your custom reading experience.</p>

    </>
  )
}
export default Main;
