import {motion,AnimatePresence} from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import Spinner from './Shared/Spinner';

import {useContext} from 'react';
import FeedbackContext from './Context/FeedbackContext'

function FeedbackList() {
  const {feedback,isLoading} = useContext(FeedbackContext);

  if(isLoading && (!feedback || feedback.length === 0))
  {
    return <p>No Feedback Yet!</p>
  }

  return isLoading ? (
    <Spinner />
    ) : (

    <AnimatePresence>

    {feedback.map((item) => (

      <motion.div 
        key={item.id}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <FeedbackItem key={item.id} item={item} />
      </motion.div>

    ))}
    
  </AnimatePresence>
  )
}


export default FeedbackList