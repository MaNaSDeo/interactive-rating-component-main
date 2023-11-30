import { useState } from 'react';
import Card from './Component/Card';
import ThankYou from './Component/ThankYou'

function App() {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {rating ? <ThankYou rating={rating}/> : <Card setRating={setRating}/>}
    </div>
  )
}

export default App
