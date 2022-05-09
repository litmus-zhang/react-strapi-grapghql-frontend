import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { REVIEWS } from '../hooks/queries';
// import useFetch from '../hooks/useFetch'


export default function Homepage()
{  
  const {loading, error, data} = useQuery(REVIEWS)
    if (loading) return <p>Loading ....</p>
    if (error) return <p>Error  </p>

    const reviews = data.reviews.data
    console.log(data);
  return (
      <div>
        
          {
              reviews.map(review =>
              {
                return(
                    <div key={review.id} className='review-card'>
                        <div className={review.attributes.rating <= 7 ? 'rating' : 'rating high'}>
                            {review.attributes.rating}</div>
                        <h2>{review.attributes.Title}</h2>
                        {
                      review.attributes.categories.data.map(c =>{
                        return (
                          <small key={c.id}>{ c.attributes.name}</small>
                      ) 
                      }
                    )
                    }
                        <p>{review.attributes.body.substring(0,200)}...</p>
                        <Link to={`/details/${review.id}`}>Read more..</Link>
                        </div>
                  )
              }
              
            )}
    </div>
  )
}
