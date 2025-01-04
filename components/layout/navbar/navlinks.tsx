'use client';
import { Menu } from 'lib/wix/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navlinks: React.FC<{ menu: Menu[] }> = ({ menu }) => {
  const pathname = usePathname();

  return (
    <>
      {menu.length ? (
        <ul className="hidden gap-6 text-sm md:flex md:items-center">
          {menu.map((item: Menu) => (
            <li key={item.title}>
              <Link
                href={item.path}
                prefetch={true}
                className={`rounded-md px-3 py-2 text-sm font-medium text-muted hover:text-foreground ${
                  pathname === item.path ? 'bg-primary/10 text-primary' : ''
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
