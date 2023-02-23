export default function CardProduct ({title, image, price}) {
  const img = image || 'https://www.clker.com/cliparts/f/Z/G/4/h/Q/no-image-available-md.png'
  return (
    <div className="max-w-xs border border-slate-200 rounded p-3.5 space-y-2">
      <img src={img} alt="" className="rounded h-32 w-full object-cover" />
      <h6 className="font-bold text-lg truncate">
        {title}
      </h6>
      <span className="text-slate-700 font-medium">
        {price}&euro;
      </span>
    </div>
  )
}