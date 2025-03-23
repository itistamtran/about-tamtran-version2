import React from "react";

const products = [
    {
        id: 1,
        title: "Halloween Pumpkin",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2507633897/display_1500/stock-photo-halloween-pumpkin-pumpkin-vector-pumpkin-icon-2507633897.jpg", 
        link: "https://www.shutterstock.com/image-illustration/halloween-pumpkin-vector-icon-08252024-2507633897",
    },
    {
        id: 2,
        title: "Half strawberry isolated",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2507123773/display_1500/stock-photo-half-strawberry-isolated-stock-illustrations-half-strawberry-drawing-fresh-strawberry-on-2507123773.jpg", 
        link: "https://www.shutterstock.com/image-illustration/half-strawberry-isolated-stock-illustrations-drawing-2507123773",
    },
    {
        id: 3,
        title: "Fresh Strawberry Vectors",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2506522265/display_1500/stock-photo-fresh-strawberry-vectors-icons-clipart-graphics-red-strawberry-vectors-and-illustrations-2506522265.jpg", 
        link: "https://www.shutterstock.com/image-illustration/fresh-strawberry-vectors-icons-clipart-graphics-2506522265",
    },
    {
        id: 4,
        title: "Cactus Blooming",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2504543527/display_1500/stock-photo-cactus-blooming-blue-red-and-pink-flowers-2504543527.jpg", 
        link: "https://www.shutterstock.com/image-illustration/cactus-blooming-blue-red-pink-flowers-2504543527",
    },
    {
        id: 5,
        title: "Honey Pinky Cat lying on the floor",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2501193111/display_1500/stock-photo-honey-pinky-cat-lying-on-the-floor-2501193111.jpg", 
        link: "https://www.shutterstock.com/image-illustration/honey-pinky-cat-lying-on-floor-2501193111",
    },
    {
        id: 6,
        title: "Honey Pinky Cute Cat on the Pillows",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2501114443/display_1500/stock-photo-honey-pinky-cute-cat-on-the-pillows-2501114443.jpg", 
        link: "https://www.shutterstock.com/image-illustration/honey-pinky-cute-cat-on-pillows-2501114443",
    },
    {
        id: 7,
        title: "Honey Pinky Cat in Bathtub",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2500838667/display_1500/stock-photo-honey-pinky-cat-in-bathtub-2500838667.jpg", 
        link: "https://www.shutterstock.com/image-illustration/honey-pinky-cat-bathtub-08092024-2500838667",
    },
    {
        id: 8,
        title: "Purple and Pink Abstract Night Sky Background",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2504574201/display_1500/stock-photo-purple-and-pink-abstract-night-sky-background-2504574201.jpg", 
        link: "https://www.shutterstock.com/image-illustration/purple-pink-abstract-night-sky-background-2504574201",
    },
];

export default function OnSalePage() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen p-6  bg-black light:bg-white">
            <h1 className="w-full h-full mb-6 text-3xl font-bold mt-15 text-white light:text-black">For Sale</h1>
            <p className="mb-6 font-bold text-gray-200 light:text-black">Explore my collection of images available for sale on Shutterstock.</p>
            
            <div className="grid w-full max-w-full grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {products.map((product) => (
                    <div key={product.id} className="overflow-hidden rounded-lg transition-transform transform hover:scale-105  bg-gray-800 light:text-white">
                        <img 
                            src={product.imageUrl} 
                            alt={product.title} 
                            className="object-cover w-full transition-transform duration-300 transform h-60 hover:scale-105" 
                            onError={(e) => e.target.src='images/placeholder.jpg'} // Fallback for broken images
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-[#FFB6C1] font-bold hover:underline">Buy on Shutterstock</a>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* See More Button */}
            <div className="mt-8">
                <a href="https://www.shutterstock.com/g/H2Peace" target="_blank" rel="noopener noreferrer" className="px-6 py-2 text-lg font-bold text-[#FFB6C1] transition duration-300 border-x-2 border-t-2 border-b-2 border-[#FFB6C1] rounded-lg hover:bg-[#FFB6C1] hover:text-black">
                    See More
                </a>
            </div>
        </div>
    );
}