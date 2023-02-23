export default function Select (props) {
  return (
    <label className="flex flex-col">
      {props.label}
      <select {...props} className="cursor-pointer px-2.5 py-1.5 border bg-white border-slate-200 outline-none disabled:opacity-40 required:invalid:border-red-500 focus:outline-slate-200 rounded">
        {props.children}
      </select>
    </label>
  )
}