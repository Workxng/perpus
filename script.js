function Book(judul, penulis, tahunTerbit, genre) {
    this.judul = judul;
    this.penulis = penulis;
    this.tahunTerbit = tahunTerbit;
    this.genre = genre;
  }
  
  let perpustakaan = [];
  
  function tambahBuku(buku) {
    perpustakaan.push(buku);
    console.log("Buku berhasil ditambahkan!");
  }
  
  function cariBuku(judul) {
    for (let i = 0; i < perpustakaan.length; i++) {
      if (perpustakaan[i].judul === judul) {
        return perpustakaan[i];
      }
    }
    return null;
  }
  
  function editBuku(judul, property, newValue) {
    let buku = cariBuku(judul);
    if (buku) {
      buku[property] = newValue;
      console.log("Buku berhasil diedit!");
    } else {
      console.log("Buku tidak ditemukan!");
    }
  }
  
  function hapusBuku(judul) {
    perpustakaan = perpustakaan.filter(buku => buku.judul !== judul);
    console.log("Buku berhasil dihapus!");
  }
  
  function tampilkanSemuaBuku() {
    console.log("Daftar Buku:");
    perpustakaan.forEach(buku => {
      console.log(`Judul: ${buku.judul}, Penulis: ${buku.penulis}, Tahun Terbit: ${buku.tahunTerbit}, Genre: ${buku.genre}`);
    });
  }
  
  // Contoh penggunaan
  let buku1 = new Book("Pemrograman JavaScript", "John Doe", 2023, "Teknologi");
  let buku2 = new Book("Algoritma dan Struktur Data", "Jane Smith", 2022, "Komputer");
  
  tambahBuku(buku1);
  tambahBuku(buku2);
  
  tampilkanSemuaBuku();
  
  editBuku("Pemrograman JavaScript", "tahunTerbit", 2024);
  hapusBuku("Algoritma dan Struktur Data");
  
  tampilkanSemuaBuku();