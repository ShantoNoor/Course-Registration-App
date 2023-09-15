import { toast } from "react-toastify";
import bookLogo from "/book.svg";
import dollarLogo from "../assets/dollar.svg";

const Card = (props) => {
  const { course } = props;
  const notify = () => {
    toast("Wow so easy !");
    toast("Wow so easy !");
    toast("Wow so easy !");
  };

  return (
    <div className="rounded-xl p-4 bg-white duration-300 hover:shadow-xl active:shadow-lg flex flex-col justify-between">
      <div>
        <img className="w-full" src={course.thumbnail} alt={course.title} />
        <p className="text-dark1 text-base font-semibold mt-4 mb-3">
          {course.title}
        </p>
        <p className="text-dark2 text-sm font-normal mb-5">
          {course.description}
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center mb-7 lg:flex-col xl:flex-row gap-3">
          <div className="flex gap-1 items-center">
            <img className="w-6 h-6" src={dollarLogo} alt="doller-logo" />
            <p className="text-dark2 text-base font-medium">
              Price: {course.price}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-6 h-6" src={bookLogo} alt="book-logo" />
            <p className="text-dark2 text-base font-medium">
              Credit: {course.credit}hr
            </p>
          </div>
        </div>
        <button
          className="text-lg font-medium bg-blue1 text-white w-full rounded-[4px] py-2 duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-[-2px] active:shadow-sm"
          onClick={notify}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Card;
