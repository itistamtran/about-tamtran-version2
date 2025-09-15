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
        title: "Halloween Black Cat",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2674954985/display_1500/stock-vector-black-cat-illustration-decorated-with-bright-orange-bows-perfect-for-halloween-autumn-and-2674954985.jpg", 
        link: "https://www.shutterstock.com/image-vector/black-cat-illustration-decorated-bright-orange-2674954985",
    },
    {
        id: 3,
        title: "Chubby Orange and White Cat Sitting",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2631980091/display_1500/stock-vector-chubby-orange-and-white-cat-sitting-cute-vector-illustration-on-transparent-background-2631980091.jpg", 
        link: "https://www.shutterstock.com/image-vector/chubby-orange-white-cat-sitting-cute-2631980091",
    },
    {
        id: 4,
        title: "Cute Orange Tabby Cat Sitting Upright",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2631824171/display_1500/stock-vector-cute-orange-tabby-cat-sitting-upright-vector-illustration-on-transparent-background-2631824171.jpg", 
        link: "https://www.shutterstock.com/image-vector/cute-orange-tabby-cat-sitting-upright-2631824171",
    },
    {
        id: 5,
        title: "Orange Cat sleeping on a laptop",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2631814413/display_1500/stock-vector-cute-orange-and-white-cat-sleeping-on-a-laptop-illustration-2631814413.jpg", 
        link: "https://www.shutterstock.com/image-vector/cute-orange-white-cat-sleeping-on-2631814413",
    },
    {
        id: 6,
        title: "Gray and White Tuxedo Cat Sitting",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2631967927/display_1500/stock-vector-gray-and-white-tuxedo-cat-sitting-elegant-vector-illustration-on-transparent-background-2631967927.jpg", 
        link: "https://www.shutterstock.com/image-vector/gray-white-tuxedo-cat-sitting-elegant-2631967927",
    },
    {
        id: 7,
        title: "Fluffy cat playing with a fish",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2675042129/display_1500/stock-vector-cute-fluffy-cat-playing-with-a-fish-cartoon-style-illustration-perfect-for-pet-animal-and-2675042129.jpg", 
        link: "https://www.shutterstock.com/image-vector/cute-fluffy-cat-playing-fish-cartoonstyle-2675042129",
    },
    {
        id: 8,
        title: "Fluffy Black and White Cat Sitting",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2631970359/display_1500/stock-vector-fluffy-black-and-white-cat-sitting-long-haired-vector-illustration-on-transparent-background-2631970359.jpg", 
        link: "https://www.shutterstock.com/image-vector/fluffy-black-white-cat-sitting-longhaired-2631970359",
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
                            className="object-contain w-full transition-transform duration-300 transform h-60 hover:scale-105" 
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
