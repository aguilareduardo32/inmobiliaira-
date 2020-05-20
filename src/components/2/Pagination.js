   import React from 'react'

   const Pagination = ({ inmueblesPerPage, totalInmuebles, paginate}) => {
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalInmuebles / inmueblesPerPage); i++) {
            pageNumbers.push(i)
        }
    
    return (
           <div>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} >
                                <a onClick={() => paginate(number)}  >
                                    {number}
                                </a>
                        </li> 
                    ))}

                </ul>
           </div>
       )
   }

   export default Pagination