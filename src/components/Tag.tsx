'use client';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

type TagProps = {
  text: string;
  iconSrc?: string;
};

export const Tag = ({ iconSrc, text }: TagProps) => {
  const { theme } = useTheme(); // Retrieve the current theme

  return (
    <div
      className={`flex w-fit items-center rounded-full border px-4 py-2 font-craftwork text-15 font-500 leading-110 tracking-[-0.01em] transition ${
        theme === 'designer' ? 'border-developer-background  text-designer-text' : 'border-designer-background text-developer-text'
      }`}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={text}
          width={16}
          height={16}
          className="mr-2 object-contain"
        />
      )}
      <span>{text}</span>
    </div>
  );
};
