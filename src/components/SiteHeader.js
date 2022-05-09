import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';


const CATEGORIES = gql`
query getCategories{
categories{
  data{
    id,
    attributes{
      name
    }
  }
}
}
`

export default function SiteHeader()
{
  const { loading, error, data } = useQuery(CATEGORIES)
  if (loading) return <p>Loading categories</p>
  if (error) return <p> Error loading categories</p>
  // console.log(data);
  const allcategory = data.categories.data
  console.log(allcategory);
  return (
      <div className='site-header'>
          <Link to= '/'>
        <h1>Site Header</h1>
        </Link> 
        <nav className='categories'><span>Filter reviews by category:</span>
          {allcategory.map(category => (
            <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
          ))}
        </nav>
       
    </div>
  )
}
