import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import MyItemsDetail from "../../components/MyItemsDetail/MyItemsDetail";
import auth from "../../firebase.init";
import useProducts from "../../Hooks/useProducts";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useProducts([]);
  console.log(products);
  let newProducts = products.filter((product) => product.email == user.email);

  console.log(newProducts);
  // useEffect(()=>{

  //    const getMyItems = () =>{
  //        const email = user.email;
  //        console.log(email)
  //        const url = `http://localhost:5000/myitem?email=${email}`;
  //        fetch(url)
  //        .then(res => res.json())
  //        .then(data => setProducts(data))
  //    }
  //    getMyItems();
  // }, [user.email])
  return (
    <div className="container">
      <h2 className="text-capitalize text-center mt-5 mb-3 fs-4 text-secondary ">my items</h2>
      <div className="row ">
        {newProducts.map((product) => (
          <MyItemsDetail item={product} />
        ))}
      </div>
    </div>
  );
};

export default MyItems;
