import { useEffect, useState } from "react"

const Pagination = ({ loadMovieByPage }) => {
    const totalPages = 20;
    const maxVisiblePages = 10;
    const [pages, setPages] = useState([]);
    const [activePage, setActivePage] = useState(1);


    const setVisiblePages = (pageNo) => {
        if(pageNo === pages[0] || pageNo === pages[pages.length - 1] || !pages.length) {
            const maxResultPageSize = totalPages > maxVisiblePages ? maxVisiblePages : totalPages;

            let startingPage;

            if (pageNo === pages[0]) {
                startingPage = pageNo - 2 > 0 ? pageNo - 2 : 1;
            } else if (pageNo === pages[pages.length - 1]) {
                startingPage = pageNo + 2 < totalPages ? (pageNo + 2) - maxResultPageSize + 1 : totalPages - maxResultPageSize + 1;

            } else {
                startingPage = 1;
            }

            const currentPages = [...Array(maxResultPageSize)].map((item, idx) => {
                return startingPage + idx;
            });
            setPages(currentPages);
        }
    }

    useEffect(() => {
        setVisiblePages();
    }, []);

    const handleClick = (pageNo) => () => {
        loadMovieByPage(pageNo);
        setActivePage(pageNo);
        setVisiblePages(pageNo);
    }


    const getButton = () => {
        return pages.map((item) => (
            <button className={`page-button ${item === activePage ? "active" : ""}`} onClick={handleClick(item)}>{item}</button>
        ))
    }

    const handlePrev = () => {
        if(activePage < 2) return;
        handleClick(activePage - 1)();
    }

    const handleNext = () => {
        handleClick(activePage + 1)();
    }
    return (
        <div className="pagination">
            <button className="page-button" disabled={activePage === 1} onClick={handlePrev}>&lt;</button>
            {getButton()}
            <button className="page-button" disabled={activePage === totalPages} onClick={handleNext}>&gt;</button>
        </div>
    )
}

export default Pagination;