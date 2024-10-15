import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ id, title, img }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Link to={`/recipe/${id}`}>
        <img src={img} alt={title} className="w-full h-48 object-cover" />
        <div className="">
          <h1 className="text-xl font-bold text-gray-900 bg-white bg-opacity-75 p-2 rounded">
            {title}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
