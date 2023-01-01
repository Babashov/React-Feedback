import {motion,AnimatePresence} from 'framer-motion';
import FeedbackItem from "./FeedbackItem";

import {useContext} from 'react';
import FeedbackContext from './Context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext);
  return (

    <AnimatePresence>

    {feedback.map((item) => (

      <motion.div 
        key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <FeedbackItem key={item.id} item={item} />
      </motion.div>

    ))}
    
  </AnimatePresence>



    // <div className="feedback-list">
    //     {feedback.map(item=>(
    //         <FeedbackItem key={item.id} item={item} handleClick = {handleClick} />
    //     ))}
    // </div>
  )
}


export default FeedbackList