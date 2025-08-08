

export const MovieResult = ({
  imageSrc,
  name,
  plot,
}: {
  imageSrc: string;
  name: string;
  plot: string;
}) => {
  return (
    <>
    <div className="flex justify-center pt-3 w-100% ">
    <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#" className="flex justify-center ">
          <img className="rounded-t-lg  pt-5" src={imageSrc} alt="Image Not Available" />
        </a>
        <div className="p-4">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className=" font-normal text-gray-700 dark:text-gray-400">
            {plot}
          </p>
        </div>
      </div>
        
    </div>

    </>
  );
};
