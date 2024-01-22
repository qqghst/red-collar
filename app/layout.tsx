import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/main.scss';
import '@/styles/_editor.scss';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
import dynamic from 'next/dynamic';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Red Collar | Разработка цифрового',
	description: 'Generated by create next app',
};

const Navbar = dynamic(() => import('@/components/navbar'), {
	ssr: false,
});
const Footer = dynamic(() => import('@/components/footer'), {
	ssr: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
