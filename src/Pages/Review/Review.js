import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('reviewe.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
             <div className='reviews-container'>
                 <h1>Dealers Reviews</h1>
             <div className='reviewer-container'>
                 {
                     reviews.map(review =>  
                        <div key={review.id}>
                              <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={review.picture} />
                                    <Card.Body>
                                        <Card.Title> Name: {review.name}</Card.Title>
                                        <p>
                                        Review: {review.review}
                                        </p>
                                        <p>
                                        Retting: {review.retting}
                                        </p>
                                        {/* <p>
                                            Age: {review.age}
                                        </p>
                                        <p>
                                            Descriptions: {review.description}
                                        </p> */}
                                     

                                    </Card.Body>
                                </Card>
                            
                        </div>
                        )
                 }
                
             

             </div>
        </div>
        </div>
    );
};

export default Review;