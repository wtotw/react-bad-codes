import Link from 'next/link';

export default function Home() {
  return (
    <ol>
      <li>
        <Link href="/jsx-shorthand">JSX省略記法</Link>
      </li>
      <li>
        <Link href="/ternary">条件分岐 その1</Link>
      </li>
      <li>
        <Link href="/conditional-rendering">条件分岐 その2</Link>
      </li>
      <li>
        <Link href="/fragment">不要なDOM</Link>
      </li>
      <li>
        <Link href="/function-definition">関数の定義場所</Link>
      </li>
      <li>
        <Link href="/use-memo">メモ化</Link>
      </li>
      <li>
        <Link href="/destructuring-assignment">分割代入</Link>
      </li>
      <li>
        <Link href="/string-value">文字列データ</Link>
      </li>
      <li>
        <Link href="/template-literal">文字列結合</Link>
      </li>
      <li>
        <Link href="/import-order">importの順番</Link>
      </li>
      <li>
        <Link href="/implicit-return">暗黙のreturn</Link>
      </li>
      <li>
        <Link href="/naming-component">コンポーネントの命名</Link>
      </li>
      <li>
        <Link href="/naming-props">Propsの命名</Link>
      </li>
    </ol>
  );
}
