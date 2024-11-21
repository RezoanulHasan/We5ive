import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title}-We5ive`;
  }, [title]);
};

export default useTitle;
