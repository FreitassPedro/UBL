export const BackgroundGrid = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            { /* Grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_2px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

            { /* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full opacity-50"></div>
        </div>
    )
}  