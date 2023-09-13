export function formatPrice(price) {
  
const formatter = new Intl.NumberFormat("vi-VN", { style: "decimal" });
const formattedPrice = formatter.format(price);
  const result = `${formattedPrice} VND`;
  return result;

}


