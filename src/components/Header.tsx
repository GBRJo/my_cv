import { LocaleSwitcher } from '@/components/LocaleSwitcher';
// import { useTranslations } from 'next-intl';

export const Header = () => {
  // const t = useTranslations('BaseTemplate'); // Для перевода текста навигации

  return (
    <div className="sticky top-0 z-50 bg-orj p-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-end">
        <nav>
          <ul className="flex flex-wrap gap-x-5 text-xl">
            <li>
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
