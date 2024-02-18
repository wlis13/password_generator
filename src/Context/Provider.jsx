import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import PropTypes from "prop-types";

function Provider({ children }) {

  const [fetchShortUrl, setFetchShortUrl] = useState([]);

  async function fetchUrl() {
    const url = "url do servidor";
    const promise = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response = await promise.json();
    setFetchShortUrl(response);
  }

  useEffect(() => {
    fetchUrl();
  }, [])

  const valueProvider = {
    fetchShortUrl
  }

  return (
    <MyContext.Provider value={valueProvider}>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;
