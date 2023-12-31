import Card from "./Card";

const CardContainer = (props) => {
  const { courses, handleClick } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} course={course} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default CardContainer;
