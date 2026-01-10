import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ index, image, title, price, rating, onRate }) {
    return (
        <div className="min-w-[250px] bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
            <a href="First.html">
                <img src={image} alt={title} className="w-full h-48 object-cover p-4" />
                <div className="text-left ">
                    <h3 className="text-sm sm:text-base font-semibold truncate">{title}</h3>
                    <p className="ttext-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">Price: ${price}</p>
                </div>
            </a>

            {/* Buy Button + Stars */}
            <div className="flex items-center gap-4 px-4 pb-4 pt-2">
                <Link to="/buy" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                Buy Now
                </Link>
                <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    onClick={() => onRate(index, i + 1)}
                    className={`cursor-pointer text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
