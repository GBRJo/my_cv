'use client';
import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation';

type ToggleSwitchProps = {
  leftLabel: string;
  rightLabel: string;
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ leftLabel, rightLabel }) => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleToggle = () => {
    toggleTheme();
    router.push(theme === 'designer' ? '/developer' : '/designer');
  };

  return (
    <div className="flex items-center gap-4">
      <h1
        className={`transition-colors duration-300 ${
          theme === 'developer' ? 'text-W' : 'text-orj'
        }`}
      >
        {leftLabel}
      </h1>
      <button
        type="button"
        onClick={handleToggle}
        className={`relative mt-4 inline-flex h-16 w-28 items-center rounded-full transition-colors duration-300 ${
          theme === 'developer' ? 'bg-W' : 'bg-bl'
        }`}
      >
        <span
          className={`absolute left-4 top-1/2 z-50 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-orj text-bl transition-transform  duration-300 ${
            theme === 'developer' ? 'translate-x-10' : 'translate-x-0'
          }`}
        >
          <h4> &amp; </h4>
        </span>
      </button>
      <h1
        className={`transition-colors duration-300 ${
          theme === 'developer' ? 'text-orj' : 'text-bl'
        }`}
      >
        {rightLabel}
      </h1>
    </div>
  );
};
