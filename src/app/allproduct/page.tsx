import Image from "next/image";
import product from "../../../public/image/Rectangle.png"
import product2 from "../../../public/image/Rectangle (1).png"
import product3 from "../../../public/image/Rectangle (2).png"
import product4 from "../../../public/image/Rectangle (3).png"
import product5 from "../../../public/image/Rectangle (4).png"
import product6 from "../../../public/image/Rectangle (5).png"
import product7 from "../../../public/image/Rectangle (7).png"
import product8 from "../../../public/image/Rectangle (8).png"
import product9 from "../../../public/image/Rectangle (9).png"
import product10 from "../../../public/image/Rectangle (10).png"
import product11 from "../../../public/image/Rectangle (11).png"
import product12 from "../../../public/image/Rectangle (12).png"
import product13 from "../../../public/image/Rectangle (13).png"
import product14 from "../../../public/image/Rectangle (14).png"
import product15 from "../../../public/image/Rectangle (15).png"
import product16 from "../../../public/image/Rectangle (16).png"
import product17 from "../../../public/image/Rectangle (17).png"
import product18 from "../../../public/image/Rectangle (18).png"
import product19 from "../../../public/image/Rectangle (19).png"
import product20 from "../../../public/image/Rectangle (20).png"
import product21 from "../../../public/image/Rectangle (21).png"
import product22 from "../../../public/image/Rectangle (22).png"
import product23 from "../../../public/image/Rectangle (23).png"
import product24 from "../../../public/image/Rectangle (24).png"
import product25 from "../../../public/image/Rectangle (25).png"
import product26 from "../../../public/image/Rectangle (26).png"
import product27 from "../../../public/image/Rectangle (27).png"
import product28 from "../../../public/image/Rectangle (28).png"
import product29 from "../../../public/image/Rectangle (29).png"

// Import images for the cards (you can add more images as needed)
import shoe1 from "../../../public/image/shoe1.png";
import shoe2 from "../../../public/image/shoe2.png";

const productData = [
  {
    image: product,
    label: "Just In",
    title: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    color: "1 Color",
    price: "MRP : ₹ 10 795.00",
  },
  {
    image: shoe2,
    label: "Just In",
    title: "Nike Air Max Pulse 2",
    category: "Men's Shoes",
    color: "2 Colors",
    price: "₹ 9,695.00",
  },
  {
    image: shoe1,
    label: "New Arrival",
    title: "Nike Air Max Pulse 3",
    category: "Women's Shoes",
    color: "3 Colors",
    price: "₹ 7,895.00",
  },
  {
    image: shoe2,
    label: "Sale",
    title: "Nike Air Max Pulse 4",
    category: "Men's Shoes",
    color: "1 Color",
    price: "₹ 6,495.00",
  },
  // Repeat for more products...
  // Add more products as needed (e.g., add up to 30 items)
];

export default function AllProducts() {
  return (
    <div className="max-w-[1345px] mx-auto py-5">
      <div className="flex flex-wrap gap-2">
        {productData.map((product, index) => (
          <div key={index} className="w-[348px]">
            <div>
              <div className="bestSellingBox">
                <div className="addToCartOverlay">View Full Details</div>
                <Image src={product.image} alt={product.title} className="mainImage" />
              </div>
              <div className="text-[#9E3500] font-medium py-2">{product.label}</div>
              <div className="text-[#111111] font-medium">{product.title}</div>
              <div className="text-[#757575] text-[15px]">{product.category}</div>
              <div className="text-[#757575] text-[15px]">{product.color}</div>
              <div className="text-[#111111] font-medium py-2">MRP : {product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
