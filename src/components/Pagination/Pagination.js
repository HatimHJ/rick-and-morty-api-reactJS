import React from 'react'

const Pagination = ({totalPosts, postPerPage, paginate}) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
    pageNumber.push(i)    
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {
          pageNumber.map(item => {
            return <li className="page-item" key={item}>
              <a onClick={() => paginate(item)} className="page-link" href="!#">{item}</a>
              </li>
          })
        }
        
      </ul>
    </nav>
  )
}

export default Pagination