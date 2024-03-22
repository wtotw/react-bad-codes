'use client';

import { useState } from 'react';

/**
 * レンダーでの関数定義は最小限に抑えましょう。
 * @returns
 */
export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1ボタン</button>
    </div>
  );
}
