interface Props {
  productName: string;
  price: string;
  sold: string;
  revenue: string;
  image?: string;
}
export default function TopSellingRow({
  productName,
  price,
  sold,
  revenue,
  image,
}: Props) {
  return (
    <div className=" grid grid-cols-5 p-2 hover:bg-gray-100 rounded-md">
      <div className=" flex items-center col-span-2 gap-2">
        <img
          src={image}
          alt={productName}
          className=" size-[2rem] rounded-md"
        />
        {productName}
      </div>
      <div className=" text-end">{price}</div>
      <div className=" text-end">{sold}</div>
      <div className=" text-end">{revenue}</div>
    </div>
  );
}
