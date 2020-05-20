import React, {  useEffect, useState } from 'react';
import axios from 'axios';

import FilterableInmuTable from './2/FilterableInmuTable'
import Pagination from './2/Pagination'


const Inmoebles = () => {

    const [inmuebles, setInmuebles] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [inmueblesPerPage] = useState(2);
    

  useEffect(() => {
      const fetchInmuebles = async () => {

        const res = await axios.get("http://localhost:5000/api/inmuebles");
        setInmuebles(res.data);
      };
      fetchInmuebles();
     
    }, []);
       
        


    
    
    const indexOfLastInmueble = currentPage * inmueblesPerPage;
    const indexOfFirstInmueble = indexOfLastInmueble - inmueblesPerPage;
    const currentInmueble = inmuebles.slice(indexOfFirstInmueble, indexOfLastInmueble)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return(
        <div>
             <FilterableInmuTable inmuebles={currentInmueble} />
             <Pagination inmueblesPerPage={inmueblesPerPage}
                                                totalInmuebles={inmuebles.length}
                                                paginate={paginate}/>
        </div>
    )
   
}

export default Inmoebles;