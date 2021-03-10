import React from 'react';
import store from '../store/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import HtmlToReactParser from 'html-to-react';
import timeConv from '../util/TimeConv';

const Main = () => {
  const htmlToReactParser = new HtmlToReactParser.Parser();
  console.log(store.markup)
  return (
    <>
      <h1 className="text-center text-sm">
        {store.title}
        <div className="d-flex justify-content-between align-items-center col-10 mx-auto">
          <small>{timeConv(store.publishedAt)} 323 reads</small>
          <div className="float-right">
            <small>11</small>
            <i className="fa fa-heart"></i>
            <i className="fa fa-heart"></i>
            <i className="fa fa-heart"></i>
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </h1>
      <img src={store.mainImage} alt="hackernoon"/>
      <div className="">{htmlToReactParser.parse(store.markup)}</div>
    </>
  )
}
export default Main;
