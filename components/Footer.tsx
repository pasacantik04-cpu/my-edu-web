export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} EduBelajar. Platform Seru Anak SMP.
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>Kebijakan Privasi</span>
          <span>•</span>
          <span>Bantuan</span>
          <span>•</span>
          <span>Kontak Guru</span>
        </div>
      </div>
    </footer>
  );
}