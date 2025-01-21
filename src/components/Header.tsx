import { LocaleSwitcher } from '@/components/LocaleSwitcher';
// import { useTranslations } from 'next-intl';

export const Header = () => {
  // const t = useTranslations('BaseTemplate'); // Для перевода текста навигации

  return (
    <div className="sticky top-0 z-50 bg-orj p-4 text-center text-lg font-semibold text-gray-100 [&_a:hover]:text-indigo-500 [&_a]:text-fuchsia-500">
      <div className="mt-2 flex justify-between">
        <nav>
          <ul className="flex flex-wrap gap-x-5 text-xl">

          </ul>
        </nav>

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
