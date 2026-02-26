'use client';

interface BrandIcon {
  id: string;
  svg: React.ReactNode;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const ICONS: BrandIcon[] = [
  {
    id: 'openai',
    top: '15%',
    left: '3%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <circle cx="20" cy="20" r="18" fill="#000"/>
        <path d="M20 7.5c-1.9 0-3.5.7-4.7 1.9a6.2 6.2 0 0 0-5.7 3.8 6.2 6.2 0 0 0 .4 6.3 6.2 6.2 0 0 0-.4 6.3 6.2 6.2 0 0 0 5.7 3.8 6.2 6.2 0 0 0 4.7 1.9 6.2 6.2 0 0 0 4.7-1.9 6.2 6.2 0 0 0 5.7-3.8 6.2 6.2 0 0 0-.4-6.3 6.2 6.2 0 0 0 .4-6.3 6.2 6.2 0 0 0-5.7-3.8A6.2 6.2 0 0 0 20 7.5zm0 2c1.2 0 2.3.4 3.1 1.1l-3.1 1.8-3.1-1.8A4.2 4.2 0 0 1 20 9.5zm-5.4 2.7 3 1.7v3.5l-3 1.7-2.6-1.9a4.2 4.2 0 0 1 0-3.1l2.6-1.9zm10.8 0 2.6 1.9a4.2 4.2 0 0 1 0 3.1l-2.6 1.9-3-1.7v-3.5l3-1.7zM20 15.4l2.6 1.5v3l-2.6 1.5-2.6-1.5v-3l2.6-1.5zm-5.4 4.6 3 1.7v3.5l-3 1.7-2.6-1.9a4.2 4.2 0 0 1 0-3.1l2.6-1.9zm10.8 0 2.6 1.9a4.2 4.2 0 0 1 0 3.1l-2.6 1.9-3-1.7v-3.5l3-1.7zm-8.5 5.4 3.1-1.8 3.1 1.8A4.2 4.2 0 0 1 20 30.5a4.2 4.2 0 0 1-3.1-1.1z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'anthropic',
    top: '25%',
    left: '12%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.20">
        <path d="M20 8L34 32H6L20 8z" fill="rgba(205,167,121,0.9)"/>
      </svg>
    ),
  },
  {
    id: 'hubspot',
    top: '35%',
    left: '7%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <circle cx="20" cy="20" r="7" fill="none" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5"/>
        <circle cx="20" cy="20" r="2.5" fill="rgba(255,122,0,0.9)"/>
        <line x1="20" y1="5" x2="20" y2="11" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="20" y1="29" x2="20" y2="35" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="5" y1="20" x2="11" y2="20" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="29" y1="20" x2="35" y2="20" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="9.4" y1="9.4" x2="13.7" y2="13.7" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="26.3" y1="26.3" x2="30.6" y2="30.6" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="30.6" y1="9.4" x2="26.3" y2="13.7" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="13.7" y1="26.3" x2="9.4" y2="30.6" stroke="rgba(255,122,0,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'salesforce',
    top: '55%',
    left: '4%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.20">
        <path d="M16.5 10a5.5 5.5 0 0 1 5.5 5.5c0 .3 0 .6-.1.8A4.5 4.5 0 0 1 28 20.5a4.5 4.5 0 0 1-4.5 4.5h-13a3.5 3.5 0 1 1 0-7h.4A5.5 5.5 0 0 1 16.5 10z" stroke="rgba(0,161,224,0.9)" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    top: '70%',
    left: '9%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <rect x="4" y="4" width="32" height="32" rx="6" fill="#0A66C2"/>
        <rect x="10" y="18" width="5" height="14" fill="white"/>
        <circle cx="12.5" cy="13" r="3" fill="white"/>
        <path d="M20 18h4c3.5 0 6 2 6 6v8h-5v-7.5c0-1.5-.8-2.5-2.5-2.5S20 23 20 24.5V32h-5V18h5z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'gmail',
    top: '8%',
    left: '30%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.20">
        <rect x="4" y="9" width="32" height="22" rx="2" fill="white"/>
        <path d="M4 11l16 11L36 11" fill="none"/>
        <path d="M4 11v20h32V11L20 22 4 11z" fill="#f2f2f2"/>
        <path d="M4 9h32L20 20 4 9z" fill="#EA4335"/>
        <rect x="4" y="9" width="6" height="22" fill="#C5221F"/>
        <rect x="30" y="9" width="6" height="22" fill="#C5221F"/>
      </svg>
    ),
  },
  {
    id: 'python',
    top: '15%',
    right: '3%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <path d="M20 4c-5 0-9 1.5-9 5v4h9v2H7c-3 0-5 2-5 6s1.8 7 5 7h3v-4.5c0-3 2-5 5-5h10c2.5 0 4-1.5 4-4V9c0-3-3.5-5-9-5zm-2 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#3776AB"/>
        <path d="M20 36c5 0 9-1.5 9-5v-4h-9v-2h13c3 0 5-2 5-6s-1.8-7-5-7h-3v4.5c0 3-2 5-5 5H15c-2.5 0-4 1.5-4 4v6c0 3 3.5 5 9 5zm2-3.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    id: 'aws',
    top: '35%',
    right: '7%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="#232F3E"/>
        <text x="20" y="19" textAnchor="middle" fill="#FF9900" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif">AWS</text>
        <path d="M10 25c2-2 5-3 10-3s8 1 10 3" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M8 25l2-1M32 25l-2-1" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'slack',
    top: '55%',
    right: '4%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <rect x="5" y="14" width="9" height="9" rx="3" fill="#E01E5A"/>
        <rect x="5" y="5" width="9" height="7" rx="3" fill="#E01E5A" opacity="0.5"/>
        <rect x="26" y="17" width="9" height="9" rx="3" fill="#2EB67D"/>
        <rect x="28" y="17" width="7" height="9" rx="3" fill="#2EB67D" opacity="0.5"/>
        <rect x="14" y="5" width="9" height="9" rx="3" fill="#36C5F0"/>
        <rect x="17" y="5" width="6" height="9" rx="3" fill="#36C5F0" opacity="0.5"/>
        <rect x="14" y="26" width="9" height="9" rx="3" fill="#ECB22E"/>
        <rect x="14" y="28" width="9" height="7" rx="3" fill="#ECB22E" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'notion',
    top: '70%',
    right: '9%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.20">
        <rect x="5" y="4" width="30" height="32" rx="3" fill="white"/>
        <text x="20" y="28" textAnchor="middle" fill="#000000" fontSize="20" fontWeight="900" fontFamily="Georgia, serif">N</text>
      </svg>
    ),
  },
  {
    id: 'github',
    top: '8%',
    right: '30%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <circle cx="20" cy="20" r="18" fill="#24292E"/>
        <path d="M20 6C12.3 6 6 12.3 6 20c0 6.2 4 11.4 9.5 13.3.7.1.9-.3.9-.7v-2.5c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3.1-.4-6.3-1.5-6.3-6.9 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.1-.4 3.8 1.4a13 13 0 0 1 7 0c2.7-1.8 3.8-1.4 3.8-1.4.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.5-6.4 6.9.5.4 1 1.3 1 2.6v3.9c0 .4.2.8.9.7C30 31.4 34 26.2 34 20c0-7.7-6.3-14-14-14z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'google-cloud',
    bottom: '12%',
    left: '25%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.22">
        <path d="M20 9.5c2.5 0 4.7 1.3 6 3.3h-3.5l-2.5-3.3z" fill="#EA4335"/>
        <path d="M26 12.8c.6 1 1 2.2 1 3.5 0 .8-.1 1.5-.4 2.2h-3.5l2.9-5.7z" fill="#FBBC05"/>
        <path d="M22.6 18.5H20l-2.5-4.3h5l.1 4.3z" fill="#4285F4"/>
        <path d="M14 12.8l2.9 5.7H13.4c-.3-.7-.4-1.4-.4-2.2 0-1.3.4-2.5 1-3.5z" fill="#34A853"/>
        <path d="M16.5 23.7H14l-1.9-2c.3-1.2 1-2.4 2-3.2l2.4 5.2z" fill="#FBBC05"/>
        <path d="M20 28.9l-3.5-5.2h7l-3.5 5.2z" fill="#34A853"/>
        <path d="M23.5 23.7H26l1.9-2a7 7 0 0 1-2 3.2l-2.4-1.2z" fill="#4285F4"/>
        <path d="M26 23.7h-2.5l2.4 1.2c1-.8 1.7-2 2-3.2l-1.9 2z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    id: 'zapier',
    bottom: '12%',
    right: '25%',
    svg: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.20">
        <circle cx="20" cy="20" r="18" fill="#FF4A00"/>
        <path d="M11 14h18L11 26h18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function getIconPosition(icon: BrandIcon): React.CSSProperties {
  const isLeft = icon.left !== undefined;
  const isEdgeIcon =
    (isLeft && icon.left !== '30%' && icon.left !== '25%') ||
    (!isLeft && icon.right !== '30%' && icon.right !== '25%');

  const pos: React.CSSProperties = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 1,
    top: icon.top,
    bottom: icon.bottom,
  };

  if (isLeft) {
    pos.left = isEdgeIcon ? 'max(2%, ' + icon.left + ')' : icon.left;
  } else {
    pos.right = isEdgeIcon ? 'max(2%, ' + icon.right + ')' : icon.right;
  }

  return pos;
}

function getTabletIconPosition(icon: BrandIcon): React.CSSProperties {
  const isLeft = icon.left !== undefined;
  const isEdgeIcon =
    (isLeft && icon.left !== '30%' && icon.left !== '25%') ||
    (!isLeft && icon.right !== '30%' && icon.right !== '25%');

  const pos: React.CSSProperties = {
    position: 'absolute',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    padding: '4px',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 1,
    opacity: 0.10,
    top: icon.top,
    bottom: icon.bottom,
  };

  if (isLeft) {
    pos.left = isEdgeIcon ? '2%' : icon.left;
  } else {
    pos.right = isEdgeIcon ? '2%' : icon.right;
  }

  return pos;
}

export function HeroBrandIcons() {
  return (
    <>
      {ICONS.map((icon) => (
        <span key={icon.id}>
          <span
            className="hidden md:flex lg:hidden"
            style={getTabletIconPosition(icon)}
          >
            {icon.svg}
          </span>
          <span
            className="hidden lg:flex"
            style={getIconPosition(icon)}
          >
            {icon.svg}
          </span>
        </span>
      ))}
    </>
  );
}
