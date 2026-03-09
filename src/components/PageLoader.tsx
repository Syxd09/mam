import { useEffect, useState } from "react";

const PageLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${loaded ? "loaded" : ""}`}>
      <img src="/images/loader.svg" alt="Loading" className="w-16 h-16" />
    </div>
  );
};

export default PageLoader;
