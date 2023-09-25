import { createGlobalState } from 'react-use';


// this library like react context that allow to pass state globally

export const useGlobalCounter = createGlobalState<number>(0);