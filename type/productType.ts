export interface ProductType {
    _id: string;
    productName: string;
    _type: "product";
    image: {
        asset : {
            _ref: string;
            _type: "image";
        }
    }
    price: number;
    category: string;
    inventory: number;
    status: string;
    description: string;
    colors?: string[]
    slug: {
        _type: "slug",
        current: string,
    }
    quantity: number,
}