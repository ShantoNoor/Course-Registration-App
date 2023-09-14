import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <p className="text-blue1 text-lg font-bold">
        Credit Hour Remaining {20} hr
      </p>
      <hr className="my-4 bg-dark0" />

      <p className="text-dark1 font-bold text-xl mb-5">Course Name</p>
      <ol className="mb-2">
        <li className="text-dark2 text-base font-normal before:content:counter(list-item)">
          Introduction to c programming
        </li>
        <li className="text-dark2 text-base font-normal">
          Introduction to c programming
        </li>
        <li className="text-dark2 text-base font-normal">Softwate Engg</li>
      </ol>

      <hr className="my-4 bg-dark0" />
      <p className="text-base text-dark3 font-medium">
        Total Credit Hour : {13}
      </p>

      <hr className="my-4 bg-dark0" />
      <p className="text-base text-dark3 font-bold">
        Total Price : {48000} USD
      </p>
    </div>
  );
};

export default Sidebar;
