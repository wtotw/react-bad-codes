'use client';

import { useState } from 'react';

function ChildComponent({ name }: { name: string }) {
  console.log('ChildComponent render: ', name);
  return <p>My name is {name}</p>;
}

/**
 * メモ化して不要なレンダリングを抑えましょう。
 * @returns
 */
export default function Page() {
  const [count, setCount] = useState(0);
  const [name] = useState('Alice');

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>+1ボタン</button>
      <ChildComponent name={name} />
    </div>
  );
}
