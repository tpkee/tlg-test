export default function Checkbox (props) {
  const { children } = props
  const customProps = { ...props, type: 'checkbox', children: null } // I don't want to bind the children to the input tag but use it as a label
  return (
    <label className="flex items-center">
      <input {...customProps} className="mr-1.5 accent-slate-600 disabled:opacity-40 focus:outline-slate-200" />
      {children}
    </label>
  )
}