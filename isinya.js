// Mengambil elemen HTML yang diperlukan
const namaMakanan = document.getElementById('namaMakanan');
const hargaMakanan = document.getElementById('hargaMakanan');
const namaMinuman = document.getElementById('namaMinuman');
const hargaMinuman = document.getElementById('hargaMinuman');
const jumlahMakanan = document.getElementById('jumlahMakanan');
const jumlahMinuman = document.getElementById('jumlahMinuman');
const totalHarga = document.getElementById('totalHarga');
const bayar = document.getElementById('bayar');
const kembalian = document.getElementById('kembalian');

// Harga makanan dan minuman
const hargaMakananList = {
  BuburAyam: 10000,
  MieAyam: 11000,
  Pecel: 8000,
  AyamBakar: 17000,
  Bakso: 12000,
};

const hargaMinumanList = {
  TehHangat: 3000,
  EsTeh: 4000,
  EsJeruk: 5000,
  EsCampur: 10000,
  EsDegan: 7000,
};

// Menampilkan harga makanan saat dipilih
namaMakanan.addEventListener('change', function () {
  const harga = hargaMakananList[this.value];
  if (harga) {
    hargaMakanan.innerHTML = '<h5>Rp. ' + harga + '</h5>';
  } else {
    hargaMakanan.innerHTML = '<h5>Rp. 0</h5>';
  }
  hitungTotalHarga();
});

// Menampilkan harga minuman saat dipilih
namaMinuman.addEventListener('change', function () {
  const harga = hargaMinumanList[this.value];
  if (harga) {
    hargaMinuman.innerHTML = '<h5>Rp. ' + harga + '</h5>';
  } else {
    hargaMinuman.innerHTML = '<h5>Rp. 0</h5>';
  }
  hitungTotalHarga();
});

// Menghitung total harga
function hitungTotalHarga() {
  const hargaMakananValue = hargaMakanan.innerText.replace('Rp. ', '');
  const hargaMinumanValue = hargaMinuman.innerText.replace('Rp. ', '');
  const jumlahMakananValue = parseInt(jumlahMakanan.value);
  const jumlahMinumanValue = parseInt(jumlahMinuman.value);
  const total = hargaMakananValue * jumlahMakananValue + hargaMinumanValue * jumlahMinumanValue;
  totalHarga.innerHTML = '<span class="text-center" id="totalHarga">Total Harga : Rp. ' + total + '</span>';

  if (bayar.value != 0) {
    hitungKembalian(total);
  }
}

// Menghitung kembalian
function hitungKembalian(total) {
  const bayarValue = parseInt(bayar.value);
  const kembalianValue = bayarValue - total;
  kembalian.innerHTML = '<h5> Rp. ' + kembalianValue + '</h5>';
}

// Ketika tombol submit ditekan
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  hitungTotalHarga();
});
