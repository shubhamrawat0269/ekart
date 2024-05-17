import { createContext, useEffect, useState } from "react";
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const contexts = { loading, setLoading, allProduct, getAllProduct };

  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
