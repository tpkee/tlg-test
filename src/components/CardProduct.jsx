export default function CardProduct ({title, listImages, price}) {
  return (
    <div>
      <picture>
        <source srcSet={listImages}   width="800" height="800" />
      </picture>
      {listImages}
    </div>
  )
}