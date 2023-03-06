interface Category {
  _id: string;
  _createAt: string;
  _updateAt: string;
  _rev: string;
  _type: "category";
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}
