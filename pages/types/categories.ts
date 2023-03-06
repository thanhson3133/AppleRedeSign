interface Category {
  _id: string;
  _createAt: string;
  _updateAt: string;
  _rev: string;
  _type: "category";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
}
