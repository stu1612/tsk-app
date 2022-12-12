// UI
import Tooltip from "../UI/ToolTip";

export default function FileInput({ imgError, handleFileChange }) {
  return (
    <div className="relative mb-8 w-[200px]">
      <label className="text-sm ">
        <p className="text-gray-400 text-md py-1 md:hidden">Profile image</p>
        <Tooltip title="Please upload your profile image" placement="left">
          <input
            required
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleFileChange}
            className="text-[10px] text-slate-200
            file:mr-5 file:py-2 file:px-6
            file:rounded-md file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-dark_500
            hover:file:cursor-pointer hover:file:bg-slate-700
            hover:file:text-slate-200"
          />
        </Tooltip>
      </label>
      {imgError && <small className="text-yellow-500 pt-1">{imgError}</small>}
    </div>
  );
}
