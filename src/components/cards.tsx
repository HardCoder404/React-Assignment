import React from "react";

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    userId?: number;
}

const Cards: React.FC<CardProps> = ({ imageUrl, title, description, userId }) => {
    return (
        <div className="relative flex flex-col my-5 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            {/* Image Section */}
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img src={imageUrl} alt="card-image" className="object-cover w-full h-full" />
            </div>

            {/* Content Section */}
            <div className="p-4 pb-10">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
                <p className="text-slate-600 leading-normal font-light">{description}</p>
            </div>

            {/* Button Section */}
            <div className="px-4 bottom-0 absolute right-0 pb-4 pt-0 mt-2">
                <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    User ID: {userId || 0}
                </button>
            </div>
        </div>
    );
};

export default Cards;
