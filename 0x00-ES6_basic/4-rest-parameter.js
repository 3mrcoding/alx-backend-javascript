export default function returnHowManyArguments(...Arr) {
  let total = 0;
  for (let i = 0; i < Arr.length; i += 1) {
    total += 1;
  }
  return total;
}
