import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ pageNumber, isNext, setSearchParams }) => {
  const handleNavigation = (type) => {
    let nextPageNumber = +pageNumber;

    if (type === "prev") {
      nextPageNumber = +pageNumber - 1;
    } else if (type === "next") {
      nextPageNumber = +pageNumber + 1;
    }

    setSearchParams(
      (prev) => {
        prev.set("page", nextPageNumber);
        return prev;
      },
      { replace: true }
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="join  my-6 flex justify-center border border-main-blue50 w-fit mx-auto">
      <button
        onClick={() => handleNavigation("prev")}
        className="join-item btn border-none"
        disabled={+pageNumber === 1}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="join-item btn border-none bg-main-blue50">
        {pageNumber}
      </button>
      <button
        onClick={() => handleNavigation("next")}
        className="join-item btn border-none"
        disabled={!isNext}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Pagination;
