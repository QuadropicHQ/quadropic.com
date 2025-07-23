interface SemiButtonProps {
  href?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function SemiButton({ children = "Schedule a Call to know more", className, href }: SemiButtonProps) {
    return (
        <a href={href || '#'} target="_blank" rel="noopener noreferrer" className={`bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block ${className}`}>
            <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>{children}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/90 to-white/0 transition-opacity duration-500 group-hover:opacity-40" />
        </a>
    );
}