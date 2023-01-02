import { createContext,useEffect,useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    
    const [feedback,setFeedback] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const [feedbackEdit,setFeedbackEdit] = useState({
      item:{},
      edit:false
    });

    useEffect(()=>{
      fetchFeedback()
    },[]);

    const fetchFeedback = async ()=>{
      const response = await fetch(`/feedback?_sort=id&_order=desc`);
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
    }

    const editFeedback = (item)=>{
      setFeedbackEdit({
        item,
        edit:true
      })
    }

    const addFeedback = async (newFeedback) => {

      const response = await fetch('feedback',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(newFeedback)
      });

      const data = await response.json();
      
        setFeedback([data, ...feedback]);
      };

      const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure delete?")) {
          await fetch(`/feedback/${id}`,{method:"DELETE"});
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };


      // Update Feedback
      const updateFeedback = async (id,updItem)=>{

          const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
              'Content-Type':'application/json',
            },
            body: JSON.stringify(updItem)
          });

          const data = await response.json();

          setFeedback(
            feedback.map((item) => (item.id === id ? {...item,...data} : item))
          )
      }

    return <FeedbackContext.Provider value={{
        feedback,
        addFeedback, 
        editFeedback, 
        feedbackEdit,
        deleteFeedback,
        updateFeedback,
        isLoading
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;