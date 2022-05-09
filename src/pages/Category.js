import React from 'react'
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CATEGORY } from '../hooks/queries';

export default function Category()
{
  const { id } = useParams()
  
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: {id: id}
  })
  if (loading) return <p>Loading categories</p>
  if (error) return <p> Error loading categories</p>
  console.log(data);
  const category = data.category.data.attributes
  const category_review = category.reviews.data
  console.log(category, category_review);
  return (
    <div>
      <h2>{category.name}</h2>
      {
              category_review.map(review =>
              {
                return(
                    <div key={review.id} className='review-card'>
                        <div className={review.attributes.rating <= 7 ? 'rating' : 'rating high'}>
                            {review.attributes.rating}</div>
                    <h2>{review.attributes.Title}</h2>
                    {/* <small>Test</small> */}
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
