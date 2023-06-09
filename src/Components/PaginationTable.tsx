// import { Component } from "react";

// export default class PaginationTable extends Component {
//     render() {
//       const { totalEntries, entriesPerPage, currentPage, onPageChange } = this.props;
  
//       const totalPages = Math.ceil(totalEntries / entriesPerPage);
//       const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
//       return (
//         <div className="pagination">
//           {pageNumbers.map((pageNumber) => (
//             <button
//               key={pageNumber}
//               className={pageNumber === currentPage ? 'active' : ''}
//               onClick={() => onPageChange(pageNumber)}
//             >
//               {pageNumber}
//             </button>
//           ))}
//         </div>
//       );
//     }
//   }

import React from 'react'

function PaginationTable() {
  return (
    <div>
      
    </div>
  )
}

export default PaginationTable
