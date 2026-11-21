// Project Burnin flame mark (original artwork).
export function BurninMark({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="burnin-outer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffaa3c" />
          <stop offset="1" stopColor="#ff3c28" />
        </linearGradient>
        <linearGradient id="burnin-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff0aa" />
          <stop offset="1" stopColor="#ffaa3c" />
        </linearGradient>
      </defs>
      <path d="M55 8 C60 30 80 38 80 60 C80 78 66 90 50 90 C32 90 20 76 22 58 C23 46 31 40 36 32 C40 24 50 18 55 8 Z" fill="url(#burnin-outer)" />
      <path d="M52 52 C55 62 66 66 66 76 C66 85 59 90 50 90 C41 90 35 84 36 76 C37 68 46 64 52 52 Z" fill="url(#burnin-inner)" />
    </svg>
  );
}
