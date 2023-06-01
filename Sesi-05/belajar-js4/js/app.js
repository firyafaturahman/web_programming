const title = document.getElementById("title");

title.innerHTML = "Belajar Penggunaan Function & Event";

// ! calculate
const calculate = () => {
  const nilai = parseInt(document.getElementById("nilai").value, 10);
  let hasil = hitungGrade(nilai);
  console.log((document.getElementById("hasil").innerHTML = hasil));
};

// ! hitung grade
const hitungGrade = (nilai) => {
  let grade = "";
  if (nilai >= 90 && nilai <= 100) {
    grade = "A";
  } else if (nilai >= 80 && nilai < 90) {
    grade = "B";
  } else if (nilai >= 70 && nilai < 80) {
    grade = "C";
  } else if (nilai >= 60 && nilai < 70) {
    grade = "D";
  } else if (nilai < 60) {
    grade = "E";
  } else {
    grade = "Tidak Sesuai !";
  }
  return `<br/> Hasil Grade Anda : ${grade}`;
};

// ! hitung maju dan mundur
const hitung = (tipe) => {
  // init variable status dan nilai
  let isStatus = "mundur";
  let nilai = 0;

  // get hasil hitung & hasil status
  const hasil = document.getElementById("hasil_hitung");
  const status = document.getElementById("hasil_status");

  if (tipe === "mundur") {
    nilai = parseInt(hasil.innerHTML) - 1;
    if (nilai < 0) {
      nilai *= 0;
    }
  } else {
    nilai = parseInt(hasil.innerHTML) + 1;
    isStatus = "maju";
  }
  hasil.innerHTML = nilai;
  status.innerHTML = `Status: ${isStatus}`;
};
