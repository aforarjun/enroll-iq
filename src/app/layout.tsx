'use client';

// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { store } from '@/redux-store/store';
import { Provider } from 'react-redux';

// export const metadata: Metadata = {
//   title: 'enroll-iq',
//   description:
//     'A different subscription modal for different organizations. Helps organizations to manage the members and help them grow with enrollIq.',
// };

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
