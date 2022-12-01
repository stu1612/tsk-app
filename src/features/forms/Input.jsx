export default function Input({ setup, state }) {
  // properties
  const { span, type, required } = setup;
  const [getter, setter] = state;

  return (
    <div className="relative w-full mb-8">
      <input
        required={required}
        type={type}
        placeholder={span}
        value={getter}
        onChange={(event) => setter(event.target.value)}
        className="bg-transparent border-b w-full py-1 focus:outline-none focus:border-dark_500 focus:border-b-2 transition-colors peer"
      />
      <label className="absolute left-0 top-1 text-transparent text-sm cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-slate-400 transition-all">
        {span}
      </label>
    </div>
  );
}
