import { useState } from 'react';
import './Card.css'

function index({setRating}) {
    const ratings = [1, 2, 3, 4, 5];
    const [isRatingSelected, setIsRatingSelected] = useState(false);
    const [selectedRating, isSelectedRating] = useState(null);

    function handleClick(){
      if(isRatingSelected){
      setRating(selectedRating)
    }}
  return (
    <div className='card-page'>
      <div className='star-icon'>
        <img src="./images/icon-star.svg" alt="" />
      </div>
      <div className='card-heading'>
        <p>How did we do?</p>
      </div>
      <div className='card-text'>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className='card-ratings'>
        {ratings.map(element => <div 
            className={selectedRating === element ? 'rating selected-rating' : 'rating'}
            key={element}
            onClick={() => {
              setIsRatingSelected(!isRatingSelected)
              isSelectedRating(element);
            }}
        >
            <p>{element}</p>
        </div>)}
        
      </div>
      <button 
        className='rating-submit-btn'
        onClick={handleClick}
      >SUBMIT</button>
    </div>
  )
}

export default index
