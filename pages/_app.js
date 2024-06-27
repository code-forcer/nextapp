import '../styles/global.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter()
  return (
    <>
      <h1>Oursite</h1>
      <nav className="header-nav">
        <ul>
            <li><Link href="/" className={router.pathname == "/"? "active":""}>Home</Link></li>
            <li><Link className={router.pathname == "/about"? "active":""} href="/about">About</Link></li>
            <li><Link className={router.pathname == "/blog"? "active":""} href="/blog">Blog</Link></li>
        </ul>
      </nav>
      <p>Header</p>
      <Component {...pageProps} />
      <p>footer</p>
    </>
  );
}
