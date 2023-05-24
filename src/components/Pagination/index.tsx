import { Button, ButtonArrow, Container } from './styles';
import { PaginationProps } from './types';

const VACANCIES_PER_PAGE = 4;

export const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  setCurrentPage,
}) => {
  const pageAmount = Math.ceil(total / VACANCIES_PER_PAGE);

  const firstPage =
    currentPage < pageAmount - 2
      ? currentPage
      : currentPage < pageAmount - 1
      ? currentPage - 1
      : currentPage - 2;

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return pageAmount > 0 ? (
    <Container>
      <ButtonArrow disabled={currentPage <= 0} onClick={handlePreviousClick}>
        {'<'}
      </ButtonArrow>

      {pageAmount > 2 && (
        <Button
          onClick={() => handlePageClick(firstPage)}
          $active={firstPage === currentPage}
        >
          {firstPage + 1}
        </Button>
      )}

      {pageAmount > 1 && (
        <Button
          onClick={() => handlePageClick(firstPage + 1)}
          $active={firstPage + 1 === currentPage}
        >
          {firstPage + 2}
        </Button>
      )}

      <Button
        onClick={() => handlePageClick(firstPage + 2)}
        $active={firstPage + 2 === currentPage}
      >
        {firstPage + 3}
      </Button>

      <ButtonArrow
        disabled={currentPage >= pageAmount - 1}
        onClick={handleNextClick}
      >
        {'>'}
      </ButtonArrow>
    </Container>
  ) : (
    <></>
  );
};
