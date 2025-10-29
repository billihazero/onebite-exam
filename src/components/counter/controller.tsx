import { Button } from "@/components/ui/button";
import {
  useCountStore,
  useDecreaseCount,
  useIncreaseCount,
} from "@/store/count";
export default function Controller() {
  //const { increase, decrease } = useCountStore(); //useCountStore에 있는 다른 인수 count도 같이 리렌더링 된다.
  // const increase = useCountStore((store) => store.increase); //콜백함수로 작성하면 increase 함수만 불러올 수 있다.
  // const decrease = useCountStore((store) => store.decrease);
  //store에서 특정한 값만 가져오는 것을 선택할 수 있도록 도와주는 것을 선택자(selector)함수 라고 한다.

  //const { increase, decrease } = useCountStore((store) => store.actions);
  //함수를 직접적으로 꺼내서 쓰는 경우는 거의 없다. store에서 함수별로 커스텀훅을 만들어 import 하여 사용한다. (유지보수 위해)
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
}
