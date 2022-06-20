import { useEffect, useState } from "react";


export const useFetch = (url: string) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return { response, error  };
};

// i started again but i just wanted to keep my last code

/*import { useEffect, useState } from "react";
//i didn't have the same issue as you so there was no need to simplify the code
type Options = {
    method: string;
    headers: { [key: string]: string };
    body: string;
};
export const useFetch = (
    url: string, 
    options: Options = { method: "GET", headers: {}, body: ""}, 
    dependencies: Array<any> = []
) => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (err) {
              setError(error);
            }
        };
        fetchData();
    }, [url, options, dependencies]);
    return { response, error };
};*/