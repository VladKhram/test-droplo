import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test app',
  description: 'Test app for Droplo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
