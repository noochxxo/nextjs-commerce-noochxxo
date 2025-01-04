import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/wix';
import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const policyMenu = await getMenu('next-js-frontend-footer-policies-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-background pb-16 text-muted md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link className="flex items-center gap-2 md:pt-1 text-white" href="/">
              <LogoSquare size="sm" />
              <span className="uppercase">{SITE_NAME}</span>
            </Link>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-4">Stay updated with our latest products and sales!</p>
            
            {/* TODO: Add subscribe form */}
          </div>
          
          <div>
            <Suspense
              fallback={
                <div className="flex h-[188px] w-[200px] flex-col gap-2">
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                </div>
              }
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <FooterMenu menu={menu} />
              </ul>
            </Suspense>
          </div>

          <div>
            <Suspense
              fallback={
                <div className="flex h-[188px] w-[200px] flex-col gap-2">
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                </div>
              }
            >
              <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <FooterMenu menu={policyMenu} />
              </ul>
            </Suspense>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-muted pt-8 md:flex-row">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://instagram.com" className="text-muted hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://facebook.com" className="text-muted hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
          </div>   
          
        </div>
        <div className="mt-4 text-center">
          <Link href="https://trotchiedigital.com" className="text-muted hover:text-primary transition-colors">
            Built with love by Trotchie Digital Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
}
