import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from '../../firebase.init';
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  // console.log(user)
  const onSubmit = (data) => {
    // console.log(data.email);
    data.email = user.email;
  //   const item = {
  //     email: user.email
  //     // service : service.name,
  //     // serviceId : serviceId,
  //     // address : event.target.address.value,
  //     // phone: event.target.phone.value
  // }
    // const url = (`http://localhost:5000/inventory`, order);
    const url = 'http://localhost:5000/inventory';
   console.log(data)
    fetch((url),{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
        console.log(result)
        if(result.insertedId){
           // alert('Your item is added!!');
            toast('Your item is added!!');
        }
    })
  };
  return (
    <div className="mb-5">
      <h2 className="text-center fs-4 text-secondary my-3">Add New Item</h2>
      <div className="addItem-form w-25 mx-auto shadow">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {/* <input className="mb-3" value={user.displayName} readOnly disabled />
        <input className="mb-3" value={user.email} readOnly disabled /> */}
        <input className="mb-3" placeholder="Product Name" {...register("name")} />
        <input
          className="mb-3"
          placeholder="Img URL"
          type="text"
          {...register("img")}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-3"
          placeholder="Supplier Name"
          type="text"
          {...register("supplier_name")}
        />
        <input
          className="mb-3"
          placeholder="Sold"
          type="text"
          {...register("sold")}
        />
        <input className=" " type="submit" value="Add Item" />
      </form>
      </div>
    </div>
  );
};

export default AddItem;


// import React from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// const AddItem = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     // console.log(data);
//     const url = `http://localhost:5000/inventory`;
//     fetch(url,{
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(result =>{
//         console.log(result)
//         if(result.insertedId){
//            // alert('Your item is added!!');
//             toast('Your item is added!!');
//         }
//     })
//   };
//   return (
//     <div className="mb-5">
//       <h2 className="text-center fs-4 text-secondary my-3">Add New Item</h2>
//       <div className="addItem-form w-25 mx-auto shadow">
//       <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
//         <input className="mb-3" placeholder="Name" {...register("name")} />
//         <input
//           className="mb-3"
//           placeholder="Img URL"
//           type="text"
//           {...register("img")}
//         />
//         <textarea
//           className="mb-3"
//           placeholder="Description"
//           {...register("description")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Price"
//           type="number"
//           {...register("price")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Quantity"
//           type="number"
//           {...register("quantity")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Supplier Name"
//           type="text"
//           {...register("supplier_name")}
//         />
//         <input
//           className="mb-3"
//           placeholder="Sold"
//           type="text"
//           {...register("sold")}
//         />
//         <input className=" " type="submit" value="Add Item" />
//       </form>
//       </div>
//     </div>
//   );
// };

// export default AddItem;
