import { gql, useQuery } from '@apollo/client'
import React from 'react'
// import reactMarkdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { REVIEW } from '../hooks/queries'
// import remarkGfm from 'remark-gfm'



// import useFetch from '../hooks/useFetc



export default function ReviewDetails()
{
  const { id } = useParams()
  const { loading, error, data } = useQuery(REVIEW,
    {
    variables: {id: id}
  })
  if(loading) return <p>Loading ....</p>
  if (error) return <p>Error _o|o_</p>
  
  // console.log(data);
  const singleReview = data.review.data.attributes
  console.log('single-review',singleReview);
  return (
    <div>
      {
         <div key={singleReview.id} className='review-card'>
         <div className={singleReview.rating <= 7 ? 'rating' : 'rating high'}>
             {singleReview.rating}</div>
         <h2>{singleReview.Title}</h2>
         {
                      singleReview.categories.data.map(c =>{
                        return (
                          <small key={c.id}>{ c.attributes.name}</small>
                      ) 
                      }
                    ) 
                    }
          {/* <ReactMarkdown>{singleReview.body}</ReactMarkdown> */}
          <ReactMarkdown children={singleReview.body} />

         </div>
      }
    </div>
  )
}
