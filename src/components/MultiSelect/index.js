import React, { useState } from "react";
import Options from "../Options";
import { Link } from "react-router-dom";
import Header from "../Header";

const MultiSelect = ({ multiQ, publishData }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [listItem, setListItem] = useState([""]);
  const [question, setQuestion] = useState("");
  //const [count, setCount] = useState(0);

  const handleChange = (e, i) => {
    setListItem(
      listItem.map((item, index) => (i === index ? e.target.value : item))
    );
    //console.log(listItem);
  };
  const addItem = () => {
    if (listItem.length === 4) return;
    setListItem([...listItem, ""]);
    if (listItem.length === 3) setShowOptions(true);
  };
  const deleteItem = (e, index) => {
    if (listItem.length === 1) return;
    const list = listItem.filter((item, i) => i !== index);
    setListItem([...list]);
    setShowOptions(false);
  };

  const renderedItems = listItem.map((item, index) => {
    return (
      <div key={index}>
        <Options
          value={item}
          type="text"
          placeholder="Type your answer here"
          onChange={(e) => handleChange(e, index)}
          addItem={addItem}
          deleteItem={(e) => deleteItem(e, index)}
        />
      </div>
    );
  });
  const handleAddQuestionButtonClick = (q, li) => {
    multiQ(q, li);
    setShowOptions(false);
    setListItem([""]);
    setQuestion("");
  };
  const handlePublishData = () => {
    handleAddQuestionButtonClick(question, listItem);
    publishData();
  };
  return (
    <div>
      <input
        value={question}
        type="text"
        placeholder="Type tour question here"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <p>Options</p>

      {renderedItems}
      {showOptions === true ? (
        <div>
          <Link to="/create-survey">
            <button
              onClick={() => handleAddQuestionButtonClick(question, listItem)}
            >
              Add Question
            </button>
          </Link>
          <button onClick={handlePublishData}>Publish</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MultiSelect;

/*const addItem = () => {
    const list = [...listItem, term];
    setListItem(list);
    setCount((count) => count + 1);
    console.log();
  };
  const handleChange=(e)=>{
    setTerm(...term, e.target.value)
  }
  //   const initial = (

  //   );
  const deleteItem = (e) => {
    const toBeDeletedIndex = e.getAttribute("passindex");
    renderedItems.filter((item, index) => {
      console.log(index);
      return index !== toBeDeletedIndex;
    });
    console.log(toBeDeletedIndex + "hello");
  };
  // const filteredList = listItem.filter((item, index) => {
  //   return index <= 3;
  // }); */
