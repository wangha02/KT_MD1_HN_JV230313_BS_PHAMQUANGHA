// let addText = prompt("Nhập câu cần chuẩn hóa: ");
// addText = addText.trim();
// let works = addText.split("");
// for (let i = 0; i < works.length; i++) {
//     let work = works[i]
//   let capitalize = work.charAt(0).toUpperCase();
//   let lower = work.slice(1).toLowerCase();
//   works[i] = capitalize + lower;
// }
// let newText = works.join("");
// console.log(newText);

function textLowUp(text) {
  text = text.trim();
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalize = word.charAt(0).toUpperCase();
    let lower = word.slice(1).toLowerCase();
    words[i] = capitalize + lower;
  }
  let lowUpCase = words.join(" ");
  return lowUpCase;
}
let addText = prompt("Nhập câu cần chuẩn hóa: ");
let lowUpCase = textLowUp(addText);
console.log(lowUpCase);
