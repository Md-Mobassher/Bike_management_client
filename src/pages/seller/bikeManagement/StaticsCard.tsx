interface StatPorp {
  name: string;
  value: number | string;
}

const StaticsCard = ({ name: title, value }: StatPorp) => {
  return (
    <div className="bg-white lg:p-4 md:p-4 p-3 rounded-lg shadow-md flex flex-col items-center justify-evenly lg:gap-3 md:gap-3 gap-1 hover:bg-green-500 hover:text-white border border-gray-300">
      <h2 className="lg:text-2xl md:text-2xl text-xl font-semibold text-center">
        {title}
      </h2>
      <p className="lg:text-4xl md:text=4xl text-3xl text-center">
        {value || 0}
      </p>
    </div>
  );
};

export default StaticsCard;
