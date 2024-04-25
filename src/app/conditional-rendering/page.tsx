function Component1() {
  return <>コンポーネント1</>;
}

function Component2() {
  return <>コンポーネント2</>;
}

function Component3() {
  return <>コンポーネント3</>;
}

type Props = {
  isAdmin: boolean;
  isUser: boolean;
  isGuest: boolean;
};

/**
 * 条件分岐が多い場合はデータの持ち方を工夫しましょう。
 * @returns
 */
export default function Page({ isAdmin, isUser, isGuest }: Props) {
  if (isAdmin) {
    return <Component1 />;
  }

  if (isUser) {
    return <Component2 />;
  }

  if (isGuest) {
    return <Component3 />;
  }
}
