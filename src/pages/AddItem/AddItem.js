import React from "react";
import { useForm } from "react-hook-form";
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
        console.log(result)
    })
  };
  return (
    <div className="mb-5">
      <h2 className="text-center fs-4 text-secondary my-3">Add New Item</h2>
      <div className="addItem-form w-25 mx-auto shadow">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3" placeholder="Name" {...register("name")} />
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
