export default function countIsChecked(arr, status) {
  const count = arr && arr.filter((item) => item.isChecked === status).length;
  return count;
}
