export default function FileInput({ imgError, handleFileChange }) {
  return (
    <div className="mb-8 grid">
      <label className="text-sm">
        Profile image
        <input
          required
          type="file"
          onChange={handleFileChange}
          className="text-sm text-slate-200
          file:mr-5 file:py-2 file:px-6
          file:rounded-md file:border-0
          file:text-sm file:font-medium
          file:bg-blue-50 file:text-dark_500
          hover:file:cursor-pointer hover:file:bg-slate-700
          hover:file:text-slate-200"
        />
      </label>
      {imgError && <small className="text-yellow-500 pt-1">{imgError}</small>}
    </div>
  );
}
