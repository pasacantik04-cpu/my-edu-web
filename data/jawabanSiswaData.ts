export interface JawabanSiswaItem {
  id: string;
  namaSiswa: string;
  kelas: string;
  tanggalSubmit: string;
  status: "Belum Dinilai" | "Selesai Dinilai";
  nilaiAkhir?: number;
  jawabanIsian: { [soalId: number]: string };
  jawabanEssay: { [soalId: number]: string };
}

export const initialJawabanSiswa: JawabanSiswaItem[] = [
  {
    id: "SUBMIT-001",
    namaSiswa: "Ahmad Rizky",
    kelas: "VIII-A",
    tanggalSubmit: "2026-10-19 08:30",
    status: "Belum Dinilai",
    jawabanIsian: {
      1: "Persuasif",
      2: "Slogan",
      3: "Pengumuman",
      4: "Gambar dan Kata-kata",
      5: "Strategis",
    },
    jawabanEssay: {
      1: "Iklan bertujuan mempromosikan produk/jasa. Slogan adalah kalimat pendek yang menjadi prinsip/visi. Poster adalah media cetak berisi gambar dan teks yang dipajang di tempat umum.",
      2: "Iklan layanan masyarakat adalah iklan yang dibuat untuk memberikan edukasi atau kesadaran sosial kepada masyarakat tanpa mencari keuntungan finansial, contohnya iklan bahaya merokok.",
      3: "Diksi sangat penting agar pesan mudah diingat, menarik perhatian, dan mampu membujuk pembaca agar mengikuti ajakan dalam iklan.",
      4: "Unsur gambar berfungsi menarik visual visual pembaca, sedangkan tulisan memperjelas rincian informasi yang disampaikan.",
      5: "Langkahnya: Menentukan tema/tujuan, menentukan target pembaca, menyusun kalimat persuasif yang singkat, serta menambahkan gambar visual pendukung.",
    },
  },
];