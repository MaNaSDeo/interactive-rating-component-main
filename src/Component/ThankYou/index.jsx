import './ThankYou.css';

function index({rating}) {
  return (
    <div className='thankyou-page'>
      <div className='thankyou-logo'>
        <img src="./images/illustration-thank-you.svg" alt="" />
      </div>
      <p className='rating-logo'>You selected {rating} out of 5</p>
      <p className='thankyou'>Thank you!</p>
      <p className='thankyou-text'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default index
