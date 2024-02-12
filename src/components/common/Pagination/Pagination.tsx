const Pagination = ({
  onPageChange,
  totalPages,
  currentPage,
}: {
  onPageChange: Function;
  totalPages: number;
  currentPage: number;
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={`page-item ${page === currentPage ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handleClick(page)}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
