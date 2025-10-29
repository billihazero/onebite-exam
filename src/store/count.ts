import { create } from "zustand"; //store 생성
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware"; //state, action 을 분리하여 재결합 하는 것을 도와주는 함수
import { immer } from "zustand/middleware/immer"; // 불변성 관리

/**
 * zustand 미들웨어는 순서가 중요하다
 * combine -> immer -> subscribeWithSelector -> persist -> devtools
 */

//combine 미들웨어가 객체형태의 store를 생성
//combine으로 선언할 시 state 값의 type이 자동으로 추론된다.
export const useCountStore = create(
  devtools(
    //redux devtools 에서 확인할 수 있도록 설정한다.
    persist(
      //현재 store의 값을 브라우저의 스토리지에 보관하도록 해준다. 새로고침해도 값이 그대로 유지
      subscribeWithSelector(
        //store의 특정한 값이 변할 때 마다 원하는 코드를 실행할 수 있게 도와준다.
        //로그아웃 했을 때 세션 보관하는 스토어가 바뀌었을 때 로그인 페이지로 보낼때 사용
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increaseOne: () => {
                set((state) => {
                  state.count += 1;
                });
                /*immer 덕분에 아래의 코드를 삭제할 수 있다. store를 부르지 않고도 update가 가능하다.
          set((store) => ({
          count: store.count + 1,
          }));
          */
              },
              decreaseOne: () => {
                set((state) => {
                  state.count -= 1;
                });
                // set((store) => ({
                //   count: store.count - 1,
                // }));
              },
            },
          })),
        ),
      ),
      {
        name: "countStore",
        //partialize를 사용해서 count를 명시하지 않으면 increase, decrease의 함수명만 저장되기 때문에 기능은 작동되지 않는다.
        //count만 명시하면 나머지 명시하지 않은 함수는 저장되지 않기 때문에 기능이 작동된다.
        partialize: (store) => ({
          count: store.count,
        }),
        //로컬 스토리지 대신 세션 스토리지에 보관할 수 있도록 설정
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "countStore",
    },
  ),
);

//구독하는 함수가 렌더링 될 때 발생할 기능을 추가? 하는 것이다. count가 update될 때 감지하여 console.log를 찍히게 한다.
useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    //Listener
    console.log(count, prevCount);
  },
);
// type Store = {
//   count: number;
//   actions: {
//     increaseOne: () => void;
//     decreaseOne: () => void;
//   };
// };

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increaseOne: () => {
//       //const count = get().count;
//       //set({ count: count + 1 });
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decreaseOne: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};
export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increaseOne);
  return increase;
};
export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decreaseOne);
  return decrease;
};
