import { useState } from "react";
import Image from "next/image";
import shoe1 from "../../public/image/shoe1.png";
import shoe2 from "../../public/image/shoe2.png";
import arrow from "../../public/image/arrow2.png";

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: shoe1,
      title: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Women's Shoes",
    },
    {
      image: shoe1,
      title: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Men's Shoes",
    },
    {
      image: shoe2,
      title: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      category: "Men's Shoes",
    },
    {
      image: shoe2,
      title: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      category: "Men's Shoes",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-[1345px] mx-auto py-5">
      {/* Header */}
      <div className="flex justify-between py-8">
        <div className="text-[18px] sm:text-[22px] font-medium py-4">Best of Air Max</div>
        <div className="flex gap-2 items-center">
          <div>Shop</div>
          {/* Arrows */}
          <Image
            src={arrow}
            alt="Previous"
            className="cursor-pointer rotate-180 w-8 sm:w-12"
            onClick={handlePrev}
          />
          <Image
            src={arrow}
            alt="Next"
            className="cursor-pointer w-8 sm:w-12"
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (370 + 15)}px)`,
            gap: "20px",
            width: `${cards.length * (370 + 15)}px`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "370px" }}
            >
              <div className="bestSellingBox">
                <div className="addToCartOverlay">View Full Details</div>
                <Image src={card.image} alt={card.title} className="mainImage" />
              </div>
              <div className="flex justify-between text-[15px] font-medium py-2">
                <div>{card.title}</div>
                <div>{card.price}</div>
              </div>
              <div className="text-[#757575] text-[15px]">{card.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
