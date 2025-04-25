export default function WindowBox({ title = "Minha Janela", children }: { title?: string; children: React.ReactNode }) {
    return (
      <div className="w-full max-w-md rounded-xl border border-gray-300 shadow-lg bg-white overflow-hidden">
        {/* Top bar da janela */}
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-300">
          <span className="font-semibold text-gray-700">{title}</span>
          <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition"></button>
        </div>
  
        {/* Conteúdo interno */}
        <div className="p-4 text-sm text-gray-700">
          {children}
        </div>
      </div>
    );
  }
  