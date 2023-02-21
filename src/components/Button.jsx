export default function Button ({ children, onClick }) {
  return (
    <button onClick={onClick} className="px-2.5 py-1.5 border hover:bg-slate-100 active:bg-slate-200 rounded">
      {children}
    </button>
  )
}