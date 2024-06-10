interface Props {
  topRegion: string;
  order: string;
  revenue: string;
}
export default function SalesByLocationRow({
  topRegion,
  order,
  revenue,
}: Props) {
  return (
    <div className=" grid grid-cols-3 p-2 hover:bg-gray-100 rounded-md">
      <div>{topRegion}</div>
      <div className=" text-end">{order}</div>
      <div className=" text-end">{revenue}</div>
    </div>
  );
}
