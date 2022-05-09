import { gql } from "@apollo/client";


export const CATEGORY = gql`
query GetCategory($id: ID!){
  category(id: $id){
    data{
      id,
      attributes{
        name,
        reviews{
          data{
            id,
            attributes{
              Title,
              body,
              rating,
              categories{
                data{
                  id,
                  attributes{
                    name
                  }
                }
              }
              
            }
          }
        }
        
      }
    }
  }
}
`


export const REVIEW = gql`
query getReview($id: ID!){
  review(id: $id){
    data{
      id,
      attributes{
        Title,
        rating,
        body,
        categories{
                data{
                  id,
                  attributes{
                    name
                  }
                }
              }
      }
    }
  }
}
`


export const REVIEWS = gql`
query getReviews{
  reviews{
    data{
      id,
      attributes{
        Title,
        rating,
        body,
        categories{
                data{
                  id,
                  attributes{
                    name
                  }
                }
              }
      }
    }
  }
}
`