export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-blue-600">
          Juragi Tools 🛠️
        </h1>

        <p className="text-gray-600 mb-10">
          무료 온라인 도구 모음
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* <a href="/tools/pdf-to-jpg" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">PDF → JPG</h2>
            <p className="text-gray-500">PDF 파일을 이미지로 변환</p>
          </a> */}

          <div className="p-6 bg-gray-200 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">PDF → JPG</h2>
            <p className="text-gray-500">곧 추가 예정</p>
          </div>

          <div className="p-6 bg-gray-200 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">PDF 합치기</h2>
            <p className="text-gray-500">곧 추가 예정</p>
          </div>

          <div className="p-6 bg-gray-200 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">이미지 압축</h2>
            <p className="text-gray-500">곧 추가 예정</p>
          </div>

        </div>

      </div>
    </main>
  );
}