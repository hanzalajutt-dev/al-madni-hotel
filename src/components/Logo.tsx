import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'gold' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const LogoEmblemSvg: React.FC<{ sizePx?: number; className?: string }> = ({
  sizePx = 40,
  className = '',
}) => {
  return (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Al Madni Hotel Emblem"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFBE7E" />
          <stop offset="50%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#9C7833" />
        </linearGradient>
        <linearGradient id="greenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#123B2D" />
          <stop offset="100%" stopColor="#0B231B" />
        </linearGradient>
      </defs>

      {/* Outer rounded octagon/shield container */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="22"
        fill="url(#greenBg)"
        stroke="url(#goldGradient)"
        strokeWidth="2.5"
      />

      {/* Inner delicate concentric border */}
      <rect
        x="12"
        y="12"
        width="76"
        height="76"
        rx="18"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.85"
      />

      {/* Mughal / Islamic Arch silhouette */}
      <path
        d="M26 70V44C26 31 37 20 50 20C63 20 74 31 74 44V70"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Arch apex point */}
      <path
        d="M50 16L53 22H47L50 16Z"
        fill="url(#goldGradient)"
      />

      {/* Stylized 'M' lettermark forming harmonious inner architecture */}
      <path
        d="M34 66V46L50 56L66 46V66"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central diamond star accent */}
      <polygon
        points="50,34 53,38 50,42 47,38"
        fill="url(#goldGradient)"
      />

      {/* Base grounding line */}
      <line
        x1="22"
        y1="73"
        x2="78"
        y2="73"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { px: 32, textClass: 'text-base', subClass: 'text-[9px]' },
    md: { px: 42, textClass: 'text-xl', subClass: 'text-[11px]' },
    lg: { px: 54, textClass: 'text-2xl', subClass: 'text-xs' },
    xl: { px: 72, textClass: 'text-3xl', subClass: 'text-sm' },
  };

  const { px, textClass, subClass } = sizeMap[size];

  const titleColor =
    variant === 'dark'
      ? 'text-[#123B2D]'
      : variant === 'gold'
      ? 'text-[#C6A15B]'
      : 'text-[#F7F3EA]';

  const subtitleColor =
    variant === 'dark'
      ? 'text-[#123B2D]/70'
      : variant === 'gold'
      ? 'text-[#DFBE7E]'
      : 'text-[#C6A15B]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoEmblemSvg sizePx={px} />
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-widest font-bold leading-none ${titleColor} ${textClass}`}
        >
          AL MADNI
        </span>
        {showSubtitle && (
          <span
            className={`font-sans tracking-[0.28em] uppercase font-semibold mt-1 flex items-center gap-1.5 ${subtitleColor} ${subClass}`}
          >
            <span className="w-2.5 h-[1px] bg-current opacity-60"></span>
            <span>HOTEL</span>
            <span className="w-2.5 h-[1px] bg-current opacity-60"></span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
