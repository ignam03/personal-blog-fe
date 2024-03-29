type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  onPageChange: (page: number) => void;
};
export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}: PaginationProps) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPages! / totalItems!); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="inline-flex items-center justify-center gap-3">
      <button
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white dark:text-darkGray rtl:rotate-180"
        onClick={() => {
          const newPage = currentPage! > 0 ? currentPage! - 1 : undefined;
          if (newPage !== undefined) {
            onPageChange(newPage);
          }
        }}
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <p className="text-xs dark:text-darkGray">
        {currentPage}
        <span className="mx-0.25">/</span>
        {totalPages}
      </p>

      <button
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white dark:text-darkGray rtl:rotate-180"
        onClick={() => {
          const newPage =
            currentPage! < totalPages! ? currentPage! + 1 : undefined;
          if (newPage !== undefined) {
            onPageChange(newPage);
          }
        }}
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
