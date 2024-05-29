import { useState } from "react";
import "../pages/Splash.css";
import axios from "axios";

const AddProduct = () => {
  const [message, setMessage] = useState("");
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!id || !name || !description || !image || !price || !rating) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("rating", rating);

      const response = await axios.post(
        "http://localhost:5000/api/products/registerProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setMessage("Product created successfully");
      } else {
        setMessage("Error creating product");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Error creating product";
      setMessage(errorMsg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signupblock">
        <h1 className="signh1">Add product</h1>
        <div className="signupdiv1">
          <p className="signuptext">Enter ID</p>
          <input
            className="signupinput"
            type="text"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="signupdiv1">
          <p className="signuptext">Choose an image</p>
          <input
            className="signupinput"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="signupdiv1">
          <p className="signuptext">Product name</p>
          <input
            className="signupinput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signupdiv1">
          <p className="signuptext">Description</p>
          <input
            className="signupinput"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="signupdiv1">
          <p className="signuptext">Rating</p>
          <input
            className="signupinput"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="signupdiv1">
          <p className="signuptext">Price</p>
          <input
            className="signupinput"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="signupbutton">
          Add
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </form>
  );
};

export default AddProduct;

// import { useState } from "react";
// import "../pages/Splash.css"
// import axios from "axios";
// const AddProduct = () => {
//     const [message, setMessage] = useState("")
//     const [id, setID] = useState("")
//     const [name, setName] = useState("")
//     const [description, setDescription] =useState("")
//     const [image, setImage] = useState("");
//     const [price, setPrice] = useState(0);
//     const [rating, setRating] = useState(0);
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       console.log(image)
//     //   if (!name || !description|| !price || !file || !rating || !id) {
//     //     setMessage("Please fill in all fields");
//     //     return;
//     //   }

//       try {

//         const response = await axios.post(
//           "http://localhost:5000/api/products/registerProduct",
//           {

//             id,
//             name,
//             image,
//             rating,
//             description,
//             price,
//           }
//         );

//         if (response.status === 201) {
//           setMessage("Product created successfully");
//         } else {
//           setMessage("Error creating product");
//         }
//       } catch (error) {
//         const errorMsg = error.response?.data?.error || "Error creating product";
//         setMessage(errorMsg);
//       }
//     };
//     return (
//       <form onSubmit={handleSubmit}>
//         <div className="signupblock">
//           <h1 className="signh1">Add product</h1>
//           <div className="signupdiv1">
//             <p className="signuptext">Enter ID</p>
//             <input
//               className="signupinput"
//               type="text"
//               value={id}
//               onChange={(e) => setID(e.target.value)}
//             />
//           </div>
//           <div className="signupdiv1">
//             <p className="signuptext">Choose an image</p>
//             <input
//               className="signupinput"
//               type="file"
//               onChange={(e) => setImage(e.target.files[0])}
//             />
//           </div>
//           <div className="signupdiv1">
//             <p className="signuptext">Product name</p>
//             <input
//               className="signupinput"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="signupdiv1">
//             <p className="signuptext">description</p>
//             <input
//               className="signupinput"
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           <div className="signupdiv1">
//             <p className="signuptext">rating</p>
//             <input
//               className="signupinput"
//               type="number"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//             />
//           </div>
//           <div className="signupdiv1">
//             <p className="signuptext">price</p>
//             <input
//               className="signupinput"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="signupbutton">
//             Add
//           </button>
//           {message && <p className="message">{message}</p>}
//         </div>
//       </form>
//     );
// }
// export default AddProduct
