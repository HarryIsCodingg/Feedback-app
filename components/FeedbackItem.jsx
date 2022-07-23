import { useContext, useState, useEffect } from "react"
import Card from "./Card"
import {FaTimes, FaEdit} from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback}=useContext(FeedbackContext);



  return (
    <Card reverse={false}>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
       <FaTimes color='purple' />
      </button>
      <button className="edit" onClick={ () => editFeedback(item)}>
        <FaEdit color='purple'/>
      </button>
      <div className="num-display">{item.rating}</div>
      <div className="text-display"> {item.text}</div>
    </Card>
  )
}

export default FeedbackItem 
