import MyContext from "./MyContext";
import PropTypes from "prop-types";

function Provider({ children }) {

  const valueProvider = {

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
