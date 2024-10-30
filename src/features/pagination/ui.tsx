import { useSearchParams } from "react-router-dom";

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currPage = parseInt(searchParams.get("page") || "1", 10);
    const isCurrentPageFirst = currPage === 1;
    const isCurrentPageLast = currPage === totalPages;

    const handleNextPage = () =>
        setSearchParams({ page: (currPage + 1).toString() });
    const handlePreviousPage = () =>
        setSearchParams({ page: Math.max(currPage - 1, 1).toString() });

    let isPageNumberOutOfRange: boolean;

    const paginationRange = [...new Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        const isPageNumberFirst = pageNumber === 1;
        const isPageNumberLast = pageNumber === totalPages;
        const isCurrentPageWithinTwoPageNumbers =
            Math.abs(pageNumber - currPage) <= 3;

        if (
            isPageNumberFirst ||
            isPageNumberLast ||
            isCurrentPageWithinTwoPageNumbers
        ) {
            isPageNumberOutOfRange = false;
            return (
                <button
                    key={index}
                    onClick={() =>
                        setSearchParams({
                            page: pageNumber.toString(),
                        })
                    }
                    className={`join-item btn ${
                        currPage === pageNumber ? "btn-active" : ""
                    }`}
                >
                    {pageNumber}
                </button>
            );
        }

        if (!isPageNumberOutOfRange) {
            isPageNumberOutOfRange = true;
            return (
                <button key="ellipsis" className="join-item btn" disabled>
                    ...
                </button>
            );
        }

        return null;
    });

    return (
        <div className="join mx-auto">
            {!isCurrentPageFirst && (
                <button className="join-item btn" onClick={handlePreviousPage}>
                    <img
                        width="16"
                        height="16"
                        src="https://img.icons8.com/ios-filled/50/back.png"
                        alt="back"
                    />
                </button>
            )}
            {paginationRange}
            {!isCurrentPageLast && (
                <button className="join-item btn" onClick={handleNextPage}>
                    <img
                        width="16"
                        height="16"
                        src="https://img.icons8.com/ios-filled/50/forward--v1.png"
                        alt="forward--v1"
                    />
                </button>
            )}
        </div>
    );
};
