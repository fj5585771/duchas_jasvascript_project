import PhotoItem from "./PhotoItem";
import "./PhotosGrid.css";
import ReactPaginate from 'react-paginate';


const PhotosGrid = ({photos, changePage, pageCount, currentPage}) => { 

    const photoNodes = photos.map((photo) => {
        return (
            <PhotoItem
            photo={photo}
            key={photo.id}
            />
        )
    });

    return (

        <>
             <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    forcePage={currentPage}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            <div className="photoGrid">{photoNodes}</div>
           
        </>
        
    )
};

export default PhotosGrid;