import React from 'react';
import store from '../store/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import HtmlToReactParser from 'html-to-react';
import timeConv from '../util/TimeConv';

const Main = () => {
  const htmlToReactParser = new HtmlToReactParser.Parser();
  console.log(store)
  return (
    <>
      <h1 className="text-center text-sm">
        {store.title}
        <div className="d-flex justify-content-between align-items-center col-11 mx-auto">
          <small className="text-small">{timeConv(store.publishedAt)} 323 reads</small>
          <div className="float-right">
            <small>11</small>
            {/* <img src={} alt="hackernoon"/>
            <img src={} alt="hackernoon"/>
            <img src={} alt="hackernoon"/>
            <img src={} alt="hackernoon"/> */}
          </div>
        </div>
      </h1>
      <img src={store.mainImage} alt="hackernoon"/>
      <div className="">{htmlToReactParser.parse(store.markup)}</div>
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
          {store.tags.map( record =>
          <div className="col-auto p-1">
            <h3 className="custom-border p-1">#{record}</h3>
          </div>
          )}
        </div>
      </div>

    </>
  )
}
export default Main;
