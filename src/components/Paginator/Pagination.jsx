import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Pagination = ({ pageNumber, isNext }) => {
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    let nextPageNumber = pageNumber;

    if (type === "prev") {
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === "next") {
      nextPageNumber = pageNumber + 1;
    }
    if (nextPageNumber > 1) {
      navigate(`/jobs?page=${nextPageNumber}`);
    } else {
      navigate(`/jobs`);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isNext && pageNumber === 1) return null;

  return (
    <div className="join  my-6 flex justify-center border border-main-blue50 w-fit mx-auto">
      <button
        onClick={() => handleNavigation("prev")}
        className="join-item btn border-none"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="join-item btn border-none bg-main-blue50">
        {" "}
        {pageNumber}
      </button>
      <button
        onClick={() => handleNavigation("next")}
        className="join-item btn border-none"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Pagination;
