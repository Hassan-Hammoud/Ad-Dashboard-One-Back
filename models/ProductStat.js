import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [{ month: String, totalSales: Number, totalUnits: Number }],
    dailyData: {
      date: String,
      totalSales: Number,
      totalUnits: Number,
    },
  },
  { timeStamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductSchema);
export default ProductStat;
