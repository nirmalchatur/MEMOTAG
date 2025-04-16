import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Comedy",
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-100",
      hover: "hover:shadow-purple-200",
      to: "/categories/Comedy",
      img: "https://cdn.siasat.com/wp-content/uploads/2022/08/New-Project-2022-08-26T120556.132.jpg",
      icon: "😂"
    },
    {
      name: "Business",
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-100",
      hover: "hover:shadow-emerald-200",
      to: "/categories/Business",
      img: "https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
      icon: "💼"
    },
    {
      name: "Education",
      color: "from-red-500 to-rose-600",
      textColor: "text-red-100",
      hover: "hover:shadow-red-200",
      to: "/categories/Education",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPhUBK1c59nkN1XHQu410qHhoC2vX4e37CA&s",
      icon: "🎓"
    },
    {
      name: "Hobbies",
      color: "from-gray-600 to-zinc-700",
      textColor: "text-gray-100",
      hover: "hover:shadow-gray-200",
      to: "/categories/Hobbies",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6abnsHmeFbWujFSzvsH_ngeFxw-crjDCS4A&s",
      icon: "🎨"
    },
    {
      name: "Government",
      color: "from-indigo-500 to-blue-600",
      textColor: "text-indigo-100",
      hover: "hover:shadow-indigo-200",
      to: "/categories/Government",
      img: "data:image/jpeg;base64,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",
      icon: "🏛️"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Discover Categories
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Explore our diverse collection of content
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {categories.map((category, index) => (
          <Link
            to={category.to}
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-lg 
                        ${category.hover} hover:shadow-xl transition-all duration-500 
                        hover:-translate-y-2 h-64 group`}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col p-6 z-10">
              <span className="text-4xl mb-2 opacity-90">{category.icon}</span>
              <h2 className={`text-2xl font-bold ${category.textColor} mb-2`}>
                {category.name}
              </h2>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/10 -mr-10 -mb-10"></div>
              <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white/10 -ml-8 -mt-8"></div>
            </div>
            
            {/* Image */}
            <div className="absolute bottom-0 right-0 w-3/4">
              <img
                src={category.img}
                alt={category.name}
                className="h-40 object-contain object-bottom transition-all duration-700 
                           group-hover:scale-110 group-hover:rotate-3 opacity-90 
                           mix-blend-lighten"
              />
            </div>
            
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full 
                              bg-gradient-to-r from-transparent via-white/30 to-transparent 
                              -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-1000"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;