import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./Shared/Card";
import FeedbackContext from "./Context/FeedbackContext";

function FeedbackItem({ item }) {

  const { deleteFeedback,editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <button onClick={()=>editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
