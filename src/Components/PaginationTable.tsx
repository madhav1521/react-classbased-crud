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


    // let currentPage: number;
        // let listItems = data;
        // let paginationLimit = 5;
        // let pageCount = Math.ceil(listItems.length / paginationLimit);
        // const paginationNumbers = document.getElementById("paginationNumbers");
        // const prevButton = document.getElementById("prevButton");
        // const nextButton = document.getElementById("nextButton");

        // const appendPageNumber = (index:any) => {
        //   const pageNumber = document.createElement("button");
        //   pageNumber.className = "pagination-number";
        //   pageNumber.innerHTML = index;
        //   pageNumber.setAttribute("page-index", index);
        //   pageNumber.setAttribute("aria-label", "Page " + index);
        //   paginationNumbers.appendChild(pageNumber);
        // };

        // const getPaginationNumbers = () => {
        //   for (let i = 1; i <= pageCount; i++) {
        //     appendPageNumber(i);
        //   }
        // };

        // const setCurrentPage = (pageNum: number) => {
        //   currentPage = pageNum;

        //   handleActivePageNumber();
        //   const prevRange = (pageNum - 1) * paginationLimit;
        //   const currRange = pageNum * paginationLimit;
        //   listItems.forEach((item, index) => {
        //     item.classList.add("hidden");
        //     if (index >= prevRange && index < currRange) {
        //       item.classList.remove("hidden");
        //     }
        //   });

        //   handlePageButtonsStatus();
        // };

        // const disableButton = (button: HTMLElement ) => {
        //   button.classList.add("disabled");
        //   button.setAttribute("disabled", true);
        // };

        // const enableButton = (button: HTMLElement ) => {
        //   button.classList.remove("disabled");
        //   button.removeAttribute("disabled");
        // };

        // const handlePageButtonsStatus = () => {
        //   if (currentPage === 1) {
        //     disableButton(prevButton);
        //   } else {
        //     enableButton(prevButton);
        //   }
        //   if (pageCount === currentPage) {
        //     disableButton(nextButton);
        //   } else {
        //     enableButton(nextButton);
        //   }
        // };

        // window.addEventListener("load", () => {
        //   getPaginationNumbers();
        //   setCurrentPage(1);
        //   prevButton.addEventListener("click", () => {
        //     setCurrentPage(currentPage - 1);
        //   });
        //   nextButton.addEventListener("click", () => {
        //     setCurrentPage(currentPage + 1);
        //   });
        //   document.querySelectorAll(".pagination-number").forEach((button) => {
        //     const pageIndex = Number(button.getAttribute("page-index"));
        //     if (pageIndex) {
        //       button.addEventListener("click", () => {
        //         setCurrentPage(pageIndex);
        //       });
        //     }
        //   });
        // });

        // const handleActivePageNumber = () => {
        //   document.querySelectorAll(".pagination-number").forEach((button) => {
        //     button.classList.remove("Active");

        //     const pageIndex = Number(button.getAttribute("page-index"));
        //     if (pageIndex === currentPage) {
        //       button.classList.add("Active");
        //     }
        //   });
        // };