import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'This comes from FeedbackContext file. The method name is FeedbackProvider 1',
            rating:10,
        },


        {
          id:2,
          text:'This comes from FeedbackContext file. The method name is FeedbackProvider 2',
          rating:9,
        },


        {
        id:3,
        text:'This comes from FeedbackContext file. The method name is FeedbackProvider 3',
        rating:7,
        },
    ]);


    const [feedbackEdit,setFeedbackEdit] = useState({
      item:{},
      edit:false
    });

    const editFeedback = (item)=>{
      setFeedbackEdit({
        item,
        edit:true
      })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

      const deleteFeedback = (id) => {
        if (window.confirm("Are you sure delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };


      // Update Feedback
      const updateFeedback = (id,updItem)=>{
          setFeedback(
            feedback.map((item) => (item.id === id ? {...item,...updItem} : item))
          )
      }

    return <FeedbackContext.Provider value={{feedback,addFeedback, editFeedback, feedbackEdit, deleteFeedback,updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;