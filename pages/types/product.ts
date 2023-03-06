type Image = {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
};

export interface Product {
  _id: string;
  _createAt: string;
  _updateAt: string;
  _rev: string;
  _type: "product";
  title: string;
  price: number;
  slug: {
    _type: "slug";
    current: string;
  };
  image: Image[];
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
}
