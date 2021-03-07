import React from "react";
import Header from "../Header";

const PublishData = ({ multiQData, singleQData }) => {
  const renderedMultiData = multiQData.map((item, index) => {
    const answers = item.answers;
    return (
      <div key={index}>
        <h3>{item.question}</h3>
        {answers.map((i, ind) => {
          return (
            <div key={ind}>
              <input type="checkbox" />
              <label>{i}</label>
            </div>
          );
        })}
      </div>
    );
  });
  const renderedSingleData = singleQData.map((item, index) => {
    const answers = item.answers;
    return (
      <div key={index}>
        <h3>{item.question}</h3>
        {answers.map((i, ind) => {
          return (
            <div key={ind}>
              <input type="radio" id={ind} name={`radio${index}`} />
              <label>{i}</label>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div>
      <Header/>
      {renderedMultiData}
      {renderedSingleData}
      <button>Confirm</button>
    </div>
  );
};

export default PublishData;
