document.forms[0].oninput = (_) => {
  let num = document.querySelector("[name = 'dollar']").value;
  let select = document.forms[0].querySelector(".select").value;
  let Resultmad = num * 8.96;
  let Resulteuro = num * 0.85;
  let resultEgyptian = num * 15.6;
  let resultAlgerianDinar = num * 136.15;
  let resultSaudiRiyal = num * 3.75;
  let resultUnitedArabEmirates = num * 3.67;
  // let result = num * ;
  // let result = num * ;
  document.querySelector(".result").textContent = `${num} $ = 0`;
  if (select === "Mad") {
    document.querySelector(
      ".result"
    ).textContent = `${num} $ = ${Resultmad.toFixed(2)}`;
  } else if (select === "Euro") {
    document.querySelector(
      ".result"
    ).textContent = `${num} $ = ${Resulteuro.toFixed(2)}`;
  } else if (select === "Egyptian Pound") {
    document.querySelector(
      ".result"
    ).textContent = `${num} $ = ${resultEgyptian.toFixed(2)}`;
  } else if (select === "Algerian Dinar") {
    document.querySelector(
      ".result"
    ).textContent = `${num} $ = ${resultAlgerianDinar.toFixed(2)}`;
  } else if (select === "Saudi Riyal") {
    document.querySelector(
      ".result"
    ).textContent = `${num} $ = ${resultSaudiRiyal.toFixed(2)}`;
  } else if (select === "United Arab Emirates Dirham") {
    document.querySelector(
      ".result"
    ).textContent = `${num} $ = ${resultUnitedArabEmirates.toFixed(2)}`;
  }
};
