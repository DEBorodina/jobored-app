import { Button, ButtonArrow,Container } from "./styles";
import { PaginationProps } from "./types";


const Pagination: React.FC<PaginationProps>= ({total, currentPage, setCurrentPage}) => {
    const VACANCIES_PER_PAGE = 4;
    const pageAmount = Math.ceil(total/VACANCIES_PER_PAGE);

    const firstPage = (currentPage < pageAmount - 2) ? currentPage : (currentPage < pageAmount - 1 ? currentPage - 1 : currentPage - 2);

    const handleBackClick = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleFrontClick = () => {
        setCurrentPage(currentPage + 1);
    }

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    }
    
    return (
        <>{pageAmount > 0 ?  <Container>
            <ButtonArrow disabled={currentPage <= 0} onClick={handleBackClick}>{'<'}</ButtonArrow>

            { pageAmount > 2 ?
            <Button onClick={() => handlePageClick(firstPage)} active={firstPage === currentPage}>{firstPage + 1}</Button>
            : <></>}

            { pageAmount > 1 ? 
            <Button onClick={() => handlePageClick(firstPage + 1)} active={firstPage + 1 === currentPage}>{firstPage + 2}</Button>
            : <></>}

            <Button onClick={() => handlePageClick(firstPage + 2)} active={firstPage + 2 === currentPage}>{firstPage + 3}</Button>

            <ButtonArrow disabled={currentPage >= pageAmount - 1} onClick={handleFrontClick} >{'>'}</ButtonArrow>
        </Container> : <></>  }    
        </>   
    )
}

export default Pagination;