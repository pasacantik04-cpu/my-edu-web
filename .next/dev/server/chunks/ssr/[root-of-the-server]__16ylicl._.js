module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/materi/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailMateriPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$materiData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/materiData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function DetailMateriPage({ params }) {
    const { id } = await params;
    const materi = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$materiData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initialMateriList"].find((m)=>m.id === id);
    if (!materi) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/materi",
                    className: "text-purple-600 hover:underline font-medium text-sm",
                    children: "← Kembali ke Daftar Materi"
                }, void 0, false, {
                    fileName: "[project]/app/materi/[id]/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex items-center space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full",
                            children: materi.subject
                        }, void 0, false, {
                            fileName: "[project]/app/materi/[id]/page.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500",
                            children: [
                                "⏱️ ",
                                materi.duration
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/materi/[id]/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/materi/[id]/page.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mt-2 mb-6",
                    children: materi.title
                }, void 0, false, {
                    fileName: "[project]/app/materi/[id]/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 text-gray-700 leading-relaxed border-t pt-6",
                    children: materi.content.map((sec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-purple-900 bg-purple-50 p-3 rounded-xl",
                                    children: sec.sectionTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/materi/[id]/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 pl-2",
                                    children: sec.body.map((paragraph, pIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-sm sm:text-base text-gray-600",
                                            children: paragraph
                                        }, pIdx, false, {
                                            fileName: "[project]/app/materi/[id]/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/materi/[id]/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/materi/[id]/page.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/materi/[id]/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 pt-6 border-t flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/materi",
                            className: "text-gray-600 hover:text-purple-600 text-sm font-medium",
                            children: "← Modul Lainnya"
                        }, void 0, false, {
                            fileName: "[project]/app/materi/[id]/page.tsx",
                            lineNumber: 47,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/ujian-tertulis",
                            className: "bg-purple-600 text-white font-medium px-6 py-2.5 rounded-xl text-sm hover:bg-purple-700 transition",
                            children: "Kerjakan Soal Ujian Tertulis ✍️"
                        }, void 0, false, {
                            fileName: "[project]/app/materi/[id]/page.tsx",
                            lineNumber: 51,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/materi/[id]/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/materi/[id]/page.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/materi/[id]/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/materi/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/materi/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/materiData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialMateriList",
    ()=>initialMateriList
]);
const initialMateriList = [
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16ylicl._.js.map