import "./Sidebar.css";
const Sidebar = (props) => {
  const { coursesList, remainingCredit, totalPrice } = props;
  return (
    <div className="p-6 bg-white rounded-xl">
      <p className="text-blue1 text-lg font-bold">
        Credit Hour Remaining {remainingCredit} hr
      </p>
      <hr className="my-4 bg-dark0" />

      <p className="text-dark1 font-bold text-xl mb-5">Course Name</p>
      <ol className="mb-2">
        {coursesList.map((course) => (
          <li key={course.id} className="text-dark2 text-base font-normal">
            {course.title}
          </li>
        ))}
      </ol>

      <hr className="my-4 bg-dark0" />
      <p className="text-base text-dark3 font-medium">
        Total Credit Hour : {20 - remainingCredit}
      </p>

      <hr className="my-4 bg-dark0" />
      <p className="text-base text-dark3 font-bold">
        Total Price : {totalPrice} USD
      </p>
    </div>
  );
};

export default Sidebar;
