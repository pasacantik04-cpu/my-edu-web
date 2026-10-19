export interface SoalUjianItem {
  id: number;
  question: string;
}

export const bankSoalUjian = {
  isianSingkat: [
    {
      id: 21,
      question: "Iklan yang bertujuan menawarkan barang atau jasa agar laku terjual disebut iklan ...."
    },
    {
      id: 22,
      question: "Kalimat pendek yang menjadi ciri khas atau identitas suatu produk atau lembaga disebut ...."
    },
    {
      id: 23,
      question: "Sebutkan dua unsur utama yang wajib ada dalam sebuah poster!"
    },
    {
      id: 24,
      question: "Sebutkan tiga contoh media penyampaian iklan!"
    },
    {
      id: 25,
      question: "Mengapa bahasa dalam iklan, slogan, dan poster harus bersifat persuasif? Jelaskan!"
    }
  ] as SoalUjianItem[],

  essay: [
    {
      id: 1,
      question: "Jelaskan perbedaan antara iklan, slogan, dan poster ditinjau dari segi bentuk dan tujuannya!"
    },
    {
      id: 2,
      question: "Sebutkan dan jelaskan tiga jenis iklan berdasarkan isinya, lengkap dengan contohnya!"
    },
    {
      id: 3,
      question: "Buatlah satu contoh slogan bertema lingkungan hidup dan satu contoh slogan bertema pendidikan!"
    },
    {
      id: 4,
      question: "Sebutkan langkah-langkah dalam membuat sebuah poster yang baik!"
    },
    {
      id: 5,
      question: "Buatlah rancangan sederhana sebuah poster layanan masyarakat bertema 'Hidup Sehat Tanpa Rokok', meliputi: gambar yang digunakan, kalimat ajakan, dan warna yang dipilih!"
    }
  ] as SoalUjianItem[]
};