"use client";
import { useState } from "react";

export default function PdfToJpg() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const uploadFile = async () => {
    if (!file) return alert("PDF 파일을 선택하세요");

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.jpg";
    a.click();

    setLoading(false);
    setDownloadReady(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        
        <h1 className="text-3xl font-bold mb-6">PDF → JPG 변환</h1>

        <input 
          type="file" 
          accept="application/pdf"
          onChange={(e)=>setFile(e.target.files[0])}
          className="mb-4"
        />

        <button 
          onClick={uploadFile}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          변환하기
        </button>

        {loading && <p className="mt-4">변환중...</p>}
        {downloadReady && <p className="mt-4">다운로드 완료 🎉</p>}

      </div>
    </main>
  );
}