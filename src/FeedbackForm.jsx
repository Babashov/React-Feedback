import { useState,useContext,useEffect } from "react";
import Card from "./Shared/Card";
import RatingSelect from "./RatingSelect";
import Button from "./Shared/Button";

import FeedbackContext from "./Context/FeedbackContext";

function FeedbackForm() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);

  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);

  useEffect(()=>{
    if(feedbackEdit.edit === true)
    {
      setDisabledBtn(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  },[feedbackEdit])

  const handleTextChange = (e) => {
    if (text === "") {
      setDisabledBtn(true);
    } else if (text !== "" && text.trim().length < 10) {
      setDisabledBtn(true);
      setMessage("Message at least more than 10 character");
    } else if (text !== "" && text.trim().length >= 10) {
      setDisabledBtn(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      rating,
      text,
    };
    
    if(feedbackEdit.edit === true)
    {

      updateFeedback(feedbackEdit.item.id,newFeedback)

    }else{
      if (text.trim().length >= 10) {
        addFeedback(newFeedback);
        setRating(10);
      }
    }

    setText("");
  };
  return (
    <Card>
      <form onSubmit={handleButtonSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={rating=>setRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={disabledBtn}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
