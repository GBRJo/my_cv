import { ToggleSwitch } from '@/components/ToggleSwitch';

export const BaseTemplate = (props: { description?: string; children?: React.ReactNode }) => {
  const { description, children } = props;

  return (
    <div className="mx-auto w-full max-w-screen-xl px-1 pb-8 pt-16 antialiased">
      <h4 className="mb-6">Hello! I’m Ann</h4>
      <h1 className="cursor-default">I have 5 years of experience as a</h1>
      <ToggleSwitch leftLabel="designer" rightLabel="developer" />
      <h1 className="cursor-default">in the IT industry</h1>
      {description && <p className="mt-4 text-gray-600">{description}</p>}
      {children}
    </div>
  );
};
