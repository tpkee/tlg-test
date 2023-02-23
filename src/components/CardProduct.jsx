import Button from "./Button"

export default function CardProduct ({title, image, price, isWishlisted, onClick}) {
  const img = image || 'https://www.clker.com/cliparts/f/Z/G/4/h/Q/no-image-available-md.png'
  return (
    <div className="max-w-xs border border-slate-200 rounded p-3.5 space-y-2 flex flex-col">
      <img src={img} alt="" className="rounded h-32 w-full object-cover" loading="lazy" />
      <h6 className="font-bold text-lg truncate">
        {title}
      </h6>
      <span className="text-slate-700 font-medium">
        {price}&euro;
      </span>
      <Button onClick={onClick}>
        {isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      </Button>
    </div>
  )
}