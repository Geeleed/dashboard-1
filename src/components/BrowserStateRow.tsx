interface Props {
  browsers: string;
  session: string;
  bounceRate: string;
  cte: string;
  goal: string;
  image: string;
}
export default function BrowserStateRow({
  browsers,
  session,
  bounceRate,
  cte,
  goal,
  image,
}: Props) {
  return (
    <div className=" grid grid-cols-6 p-2 hover:bg-gray-100 rounded-md">
      <div className=" flex items-center col-span-2 gap-2">
        <img src={image} alt={browsers} className=" size-[2rem] rounded-md" />
        {browsers}
      </div>
      <div className=" text-end">{session}</div>
      <div className=" text-end">{bounceRate}</div>
      <div className=" text-end">{cte}</div>
      <div className=" text-end">{goal}</div>
    </div>
  );
}
