import React from "react";

const Pagination = ({currentPage, setCurrentPage, totalPages, itemsPerPage, setItemsPerPage}) => {
    const handlePreviousClick = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextClick = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    const handleItemsPerPage = (e) => {
        setItemsPerPage(e.target.value); 
        setCurrentPage(1); //set page to 1st page when changing items per page
    }
    return (
        <div>
            <div className="flex flex-row justify-center items-center font-mono gap-5">
                <div>
                    <button
                        onClick={handlePreviousClick} 
                        className="bg-yellow-600 text-white py-1 px-2 rounded-sm"
                    >
                        Prev
                    </button>
                </div>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <div>
                    <button 
                        onClick={handleNextClick} 
                        className="bg-yellow-600 text-white py-1 px-2 rounded-sm"
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center p-2">
                <select
                    className="bg-white border px-2 py-1 rounded font-mono"
                    onChange={handleItemsPerPage}
                    value={itemsPerPage}
                >
                    <option value={10}>10 / page</option>
                    <option value={20}>20 / page</option>
                    <option value={50}>50 / page</option>
                </select>
            </div>
        </div>
    );
};

export default Pagination;
