export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "m_categories",
      title: "Category",
      type: "string",
    },
    {
      name: "m_alt_categories",
      title: "Alt Category",
      type: "string",
    },
    {
      name: "phonenumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "m_name",
      title: "Name",
      type: "string",
    },
    {
      name: "m_alt_name",
      title: "Alt Name",
      type: "string",
    },
    {
      name: "m_score",
      title: "Score",
      type: "number",
    },
    {
      name: "m_adjustment",
      title: "Adjustment",
      type: "string",
    },
    {
      name: "m_retail",
      title: "Retail",
      type: "number",
    },
    {
      name: "m_rank",
      title: "Rank",
      type: "number",
    },
    {
      name: "leg_numeric_score",
      title: "Leg Numeric Score",
      type: "string",
    },
    {
      name: "leg_adj_frequency",
      title: "Leg Adj Frequency",
      type: "string",
    },
    {
      name: "leg_alpha_score",
      title: "Leg Alpha Score",
      type: "string",
    },
   
    {
      name: "leg_retail",
      title: "Leg Retail",
      type: "number",
    },
    {
      name: "leg_rank",
      title: "Leg Rank",
      type: "string",
    },
    {
      name: "m_note",
      title: "Note",
      type: "string",
    },
    {
      name: "twi",
      title: "TWI",
      type: "number",
    },
    {
      name: "par",
      title: "PAR",
      type: "number",
    },
    {
      name: "tms",
      title: "TMS",
      type: "number",
    },
    {
      name: "com",
      title: "COM",
      type: "number",
    },
    {
      name: "dom",
      title: "DOM",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
