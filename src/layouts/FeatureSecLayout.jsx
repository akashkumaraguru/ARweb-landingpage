import FeatureSection from "../Components/FeatureSection";
const FeatureSecLayout = (props) => {
  return (
    <div className="relative w-fit  overflow-hidden rounded-xl border-neutral-800 min-h[800px]">
      <div className=" ml-20 mt-10 lg:mt-20 ">
        <div className="w-full sm:ml-0 sm:1/2 lg:w-2/3">
          <div className="flex  ">
            <div className="flex  mx-6 p-2 bg-neutral-900 text-blue-300 justify-center items-center rounded-full">
              {props.icon}
            </div>
            <h5 className="mt-1 text-xl ">{props.text}</h5>
          </div>
          <p className="text-md p-2 mb-6 ml-20 text-neutral-500">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSecLayout;
