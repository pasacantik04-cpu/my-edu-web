export interface MateriItem {
  id: string;
  title: string;
  subject: string;
  duration: string;
  summary: string;
  content: {
    sectionTitle: string;
    body: string[];
  }[];
}

export const initialMateriList: MateriItem[] = [
  {
    id: "iklan-slogan-poster",
    title: "Mengenal Iklan, Slogan, dan Poster",
    subject: "Bahasa Indonesia",
    duration: "25 Menit",
    summary: "Pelajari pengertian, perbedaan, ciri-ciri, jenis, serta unsur penyusunan iklan, slogan, dan poster secara lengkap.",
    content: [
      {
        sectionTitle: "A. Pengertian Iklan, Slogan, dan Poster",
        body: [
          "1. Iklan: Pemberitahuan kepada masyarakat mengenai barang atau jasa yang dijual, dipasang di media massa (surat kabar, majalah, televisi, radio, atau internet) dengan tujuan menarik minat pembeli atau pemakai. Bersifat persuasif (membujuk/memengaruhi).",
          "2. Slogan: Kalimat pendek yang menarik, mencolok, dan mudah diingat untuk menjelaskan tujuan suatu ideologi, organisasi, produk, atau kegiatan masyarakat.",
          "3. Poster: Plakat (media publikasi) yang terdiri atas gambar dan/atau tulisan yang dipasang di tempat umum, memadukan unsur gambar dan tulisan secara seimbang agar pesannya cepat ditangkap."
        ]
      },
      {
        sectionTitle: "B. Perbedaan Iklan, Slogan, dan Poster",
        body: [
          "• Tujuan: Iklan menawarkan barang/jasa; Slogan menyampaikan visi/semangat/identitas; Poster mengumumkan/mempromosikan dengan visual mencolok.",
          "• Bentuk: Iklan berupa gambar/teks/video/audio; Slogan berupa kalimat pendek padat berima; Poster berupa perpaduan gambar dan teks singkat.",
          "• Media: Iklan via koran/TV/internet; Slogan berdiri sendiri/bagian iklan; Poster ditempel di tempat umum."
        ]
      },
      {
        sectionTitle: "C. Ciri-Ciri Utama",
        body: [
          "• Ciri Iklan: Bersifat objektif, jujur, singkat, komunikatif, persuasif, serta menampilkan keunggulan produk/informasi penting.",
          "• Ciri Slogan: Rangkaian kata/frasa pendek, mencolok, mudah diingat, menggunakan diksi berima atau gaya bahasa perumpamaan/repetisi.",
          "• Ciri Poster: Memadukan unsur gambar dan tulisan, warna mencolok, bahasa singkat dan jelas, serta ditempatkan di lokasi strategis."
        ]
      },
      {
        sectionTitle: "D. Jenis-Jenis",
        body: [
          "• Jenis Iklan: Iklan Pemberitahuan/Pengumuman, Iklan Penawaran (Niaga), dan Iklan Layanan Masyarakat.",
          "• Jenis Slogan: Slogan Lingkungan Hidup, Pendidikan, Kesehatan, Motivasi/Kehidupan, dan Produk/Niaga.",
          "• Jenis Poster: Poster Niaga, Poster Kegiatan, Poster Layanan Masyarakat, Poster Pendidikan, dan Poster Kelas/Karya."
        ]
      },
      {
        sectionTitle: "E. Unsur dan Syarat Penyusunan",
        body: [
          "• Unsur Iklan: Sumber, Pesan, Media, Penerima, dan Efek/dampak.",
          "• Syarat Slogan & Poster yang Baik: Singkat, padat, jelas, menarik, menggunakan kalimat persuasif, serta gambar dan tulisan yang saling mendukung."
        ]
      },
      {
        sectionTitle: "F. Langkah-Langkah Menyusun",
        body: [
          "1. Menentukan tujuan dan sasaran (target pembaca/pendengar).",
          "2. Menentukan tema atau topik utama.",
          "3. Mengumpulkan informasi penting.",
          "4. Menyusun kalimat yang singkat, menarik, dan persuasif.",
          "5. Menambahkan gambar/ilustrasi pendukung (khusus poster/iklan visual).",
          "6. Memeriksa kembali kesesuaian bahasa dan ejaan sebelum dipublikasikan."
        ]
      }
    ]
  }
];