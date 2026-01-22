interface MpesaIconProps {
  className?: string;
  size?: number;
}

const MpesaIcon = ({ className = "", size = 24 }: MpesaIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* M-Pesa styled icon - mobile money */}
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="M9 6h6" />
      <circle cx="12" cy="11" r="3" />
      <path d="M12 8v1.5" />
      <path d="M12 12.5V14" />
      <path d="M10.5 10l1.5 1" />
      <path d="M12 11l1.5-1" />
    </svg>
  );
};

export default MpesaIcon;
