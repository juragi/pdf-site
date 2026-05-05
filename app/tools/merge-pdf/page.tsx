"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePDFPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert("PDF 파일을 2개 이상 선택하세요");
      return;
    }

    setLoading(true);

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const copiedPages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
      );
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    const blob = new Blob(
      [mergedBytes.buffer as ArrayBuffer],
      { type: "application/pdf" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "merged.pdf";
    link.click();

    setLoading(false);
  };

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">PDF 합치기</h1>

      <input
        type="file"
        multiple
        accept="application/pdf"
        onChange={(e) =>
          setFiles(Array.from(e.target.files || []))
        }
        className="mb-6"
      />

      <button
        onClick={mergePDFs}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        {loading ? "처리 중..." : "PDF 합치기"}
      </button>
    </main>
  );
}