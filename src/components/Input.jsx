export default function Input (props) {
  const { children } = props
  const customProps = { ...props, children: null } // I don't want to bind the children to the input tag but use it as a label
  return (
    <label className="flex flex-col">
      {children}
      <input {...customProps} className="px-2.5 py-1.5 border border-slate-200 outline-none disabled:opacity-40 required:invalid:border-red-500 focus:outline-slate-200 rounded" />
    </label>
  )
}