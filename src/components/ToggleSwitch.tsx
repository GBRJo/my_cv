'use client';
import Hoverable from '@/components/Hoverable';
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
      <h1>{leftLabel}</h1>
      <button
        type="button"
        onClick={handleToggle}
        className={`relative mt-4 inline-flex h-16 w-28 cursor-none items-center rounded-full transition-colors duration-300 ${
          theme === 'developer' ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute left-4 top-1/2 z-50 -translate-y-1/2 transition-transform duration-300 ${
            theme === 'developer' ? 'translate-x-16' : 'translate-x-0'
          }`}
        >
          <Hoverable>
            <span className="text-xl font-bold">&</span>
          </Hoverable>
        </span>
      </button>
      <h1>{rightLabel}</h1>
    </div>
  );
};
