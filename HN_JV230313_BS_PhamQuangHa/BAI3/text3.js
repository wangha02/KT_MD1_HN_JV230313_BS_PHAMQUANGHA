function dayInMonth() {
  let months = prompt("Nhập tháng: ");
  let years = prompt("Nhập năm: ");
  let days;
  switch (months) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
      days = 31;
      break;
    case "4":
    case "6":
    case "9":
    case "11":
      days = 30;
      break;
    case "2":
      if ((years % 4 == 0 && years % 100 != 0) || years % 400 == 0) {
        days = 29;
      } else {
        days = 28;
      }
      break;
    default:
      alert("Ngày/Năm không hợp lệ..!");
      return;
  }
  console.log(" ngày " + days + " tháng " + months + " năm " + years);
}
dayInMonth();
