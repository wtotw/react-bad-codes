import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/jsx-shorthand">JSX省略記法</Link>
      </li>
      <li>
        <Link href="/ternary">条件分岐</Link>
      </li>
    </ul>
  );
}
