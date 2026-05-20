interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = "" 
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(148, 163, 184, 0.6) 40%, rgba(255, 255, 255, 1) 50%, rgba(148, 163, 184, 0.6) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        animation: disabled ? 'none' : `shiny ${animationDuration} linear infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
        .shiny-text.disabled {
          background-image: none;
          color: #64748b;
          -webkit-text-fill-color: initial;
        }
      `}</style>
    </div>
  );
};

