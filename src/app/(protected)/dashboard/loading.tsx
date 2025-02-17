const Loading = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-5">
            <div className="w-full h-20 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="w-full h-20 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="w-full h-20 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="w-full h-20 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
    );
};

export default Loading;
