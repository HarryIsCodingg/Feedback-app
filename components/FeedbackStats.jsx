
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackStats() {

  const {feedback} =useContext(FeedbackContext);

  let calculateAverage= feedback.reduce((acc,cur)=>{
    return acc + cur.rating;
  }, 0) /feedback.length;
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(calculateAverage) ? 0 : calculateAverage}</h4>
    </div>
  )
}


export default FeedbackStats