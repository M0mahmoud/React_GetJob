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
    <div className="flex justify-center items-center gap-2 my-6">
      <button
        onClick={() => handleNavigation("prev")}
        className={`${
          pageNumber == 1 ? "hidden" : "block"
        } border p-3 rounded-md border-main-blue font-semibold text-white bg-main-blue !text-small-regular text-light-2`}
      >
        Prev
      </button>
      <button className=" border p-3 rounded-md border-main-blue font-semibold text-white bg-main-blue text-small-semibold text-light-1">
        {pageNumber}
      </button>
      <button
        onClick={() => handleNavigation("next")}
        className={`${
          !isNext ? "hidden" : "block"
        } border p-3 rounded-md border-main-blue font-semibold text-white bg-main-blue !text-small-regular text-light-2`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
