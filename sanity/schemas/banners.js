export const banners = {
  name: "banners",
  title: "Banners",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Description",
      name: "description",
      type: "object",
      fields: [
        { name: "buttonText", type: "string", title: "Button Text" },
        { name: "description", type: "string", title: "Description" },
        { name: "preheader", type: "string", title: "Preheader" },
        { name: "header", type: "string", title: "Header" },
        { name: "smallText", type: "string", title: "Small Text" },
        { name: "midText", type: "string", title: "Middle Text" },
        { name: "discount", type: "string", title: "Discount" },
      ],
    },
    {
      title: "Sale Time",
      name: "saleTime",
      type: "object",
      fields: [
        { name: "start", type: "date", title: "Start" },
        { name: "end", type: "date", title: "End" },
      ],
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "products" }],
    },
    {
      name: "tag",
      title: "Tag",
      type: "reference",
      to: [{ type: "tags" }],
    },
  ],
};
