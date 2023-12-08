'use client';
import { ReduxProvider } from '@/redux/provider';
import { toastContainer } from '@/config/toast';
import { SITE_FONT } from '@/config/fonts';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

// export const metadata = {
//   title: PROJECT.name,
//   description: PROJECT.description,
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${SITE_FONT.className} theme-core skin-light`}>
        <ReduxProvider>
          {toastContainer}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
