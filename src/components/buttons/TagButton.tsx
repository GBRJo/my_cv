'use client';

import { useTheme } from '@/context/ThemeContext';
import clsx from 'clsx';
import Image from 'next/image';

type TagButtonProps = {
  iconSrc: string;
  label: string;
  href: string;
};

export const TagButton: React.FC<TagButtonProps> = ({ iconSrc, label, href }) => {
  const { theme } = useTheme(); // Получаем текущую тему через useTheme

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'flex w-fit items-center space-x-2 rounded-full px-5 py-3 font-craftwork text-15 font-500 leading-110 tracking-[-0.01em] transition',
        theme === 'designer'
          ? ' bg-developer-background text-developer-text'
          : 'bg-designer-background text-designer-text',
      )}
    >
      <Image src={iconSrc} alt={label} width={24} height={24} className="object-contain" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};
