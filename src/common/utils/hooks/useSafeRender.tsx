import {useRef,useEffect} from 'react'

const useSafeRender = (cb:() => void) => {

  const mounted = useRef<boolean>(false);

  useEffect(() => {
    async function fetchRequest() {
      mounted.current = true;
      cb();
    }
    fetchRequest();
    return () => {
      mounted.current = false;
    };


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[mounted]);


  return mounted;
}

export default useSafeRender
