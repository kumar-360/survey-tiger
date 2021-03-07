import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import MultiSelect from "../MultiSelect";
import PublishData from "../PublishData";
import SingleSelect from "../SingleSelect";

const SurveyForm = () => {
  const [multiClicked, setMultiClicked] = useState(false);
  const [singleClicked, setSingleClicked] = useState(false);
  const [dropdownState, setsetDropdownState] = useState("select-question");
  const [publish, setPublish] = useState(false);

  const [multiQData, setMultiQData] = useState([]);
  const [singleQData, setSingleQData] = useState([]);

  // console.log(multiQData[0].question)

  const handleChange = (e) => {
    if (e === "multi") {
      setMultiClicked(true);
      setSingleClicked(false);
      setsetDropdownState(e);
    }
    if (e === "single") {
      setSingleClicked(true);
      setMultiClicked(false);
      setsetDropdownState(e);
    }
  };
  const handleMultiSelectData = (q, a) => {
    //const x=a.join();
    const detailsReceived = {
      question: q,
      answers: a,
    };
    setMultiQData([...multiQData, detailsReceived]);
    //console.log(multiQData);
  };
  const handleSingleSelectData = (q, a) => {
    //console.log(e);

    const detailsReceived = {
      question: q,
      answers: a,
    };
    setSingleQData([...singleQData, detailsReceived]);
  };
  //console.log(multiQ)

  return publish === false ? (
    <div>
      <Header />
      <select
        onChange={(e) => handleChange(e.target.value)}
        value={dropdownState}
      >
        <option disabled value="select-question">
          Select Question Type
        </option>
        <option value="multi">Multi-select</option>
        <option value="single">Single-select</option>
      </select>
      {multiClicked === true ? (
        <MultiSelect
          multiQ={handleMultiSelectData}
          publishData={() => setPublish(true)}
        />
      ) : (
        ""
      )}
      {singleClicked === true ? (
        <div>
          
          <SingleSelect
            singleQ={handleSingleSelectData}
            publishData={() => setPublish(true)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    <PublishData multiQData={multiQData} singleQData={singleQData} />
  );
};

export default SurveyForm;
