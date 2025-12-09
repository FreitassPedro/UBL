
const GlobalLoader = () => {
    return (
        <div className="flex fixed z-100 inset-0 items-center justify-center min-h-screen bg-neutral-950/50 backdrop-blur-sm transition-opacity text-white">
            <div className="flex flex-col items-center bg-bg-card rounded gap-4 p-8 shadow-xl">
                <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500 "></div>
                <p className="text-sm">Carregando...</p>
            </div>
        </div>
    )
}

export default GlobalLoader;

{/* 
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-2xl">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 animate-pulse">
          Carregando...
        </span>
      </div >
    </div >
    */}