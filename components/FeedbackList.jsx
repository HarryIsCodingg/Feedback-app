import FeedbackItem from "./FeedbackItem";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useState } from "react";
import Loading from '../assets/Loading.gif'
import Loader from "../shared/Loader";

function FeedbackList() {

  const {feedback, isLoading} =useContext(FeedbackContext);
  


  if ( !isLoading && (!feedback || feedback.length === 0) ){
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? <Loader /> : ((
    
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  
  ))
  
}

export default FeedbackList;
