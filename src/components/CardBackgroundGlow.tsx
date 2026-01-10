
interface CardBackgroundGlowProps {
    color?: string;
    format: 'linear' | 'radial';
}

export const CardBackgroundGlow: React.FC<CardBackgroundGlowProps> = ({ color, format }) => {
    switch (format) {
        case 'radial':
            return (
                <>
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
                </>
            );
        case 'linear':
            return (
                <div className={`absolute inset-0 bg-linear-to-br ${color} to-transparent opacity-50 pointer-events-none`} />
            );
    }
    
};