import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db, storage } from '../conf/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const dbRef = collection(db, "products")
  const userMail = JSON.parse(localStorage.getItem("user"))?.email;
  const navgate = useNavigate()
  const [profileImageURL, setProfileImageURL] = useState(null)
  const [image, setImage] = useState()
  const [category, setCategory] = useState()
  const [disc, setDisc] = useState()
  const [price, setPrice] = useState()
  const [productName, setProductName] = useState()

  if (!userMail){
    navgate("/")
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImageURL(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const addProduct = async () => {
    try {
      const imgs = ref(storage, `product_images/${v4()}`);
      const uploadTaskSnapshot = await uploadBytes(imgs, image);
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
  
      const imageUrl = downloadURL.toString();
  
      await addDoc(dbRef, {
        category: category,
        disc: disc,
        ifAvailable: true,
        image: imageUrl,
        price: price,
        name: productName,
        user: userMail
      });
  
      navgate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="p-4 w-full sm:max-w-[70%] text-left max-h-full">
      <div className="bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Sell your product
          </h3>
          <button onClick={addProduct} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            Add
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input onChange={handleFileChange} id="dropzone-file" accept="image/*" type="file" className="hidden" />
              </label>
            </div>

            <img className="col-span-2 sm:col-span-1 w-full max-h-[250px] object-contain rounded-lg shadow-xl dark:shadow-gray-800" src={profileImageURL ? (profileImageURL) : ("https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1-1-580x386.jpg")} alt="image description" />

            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
              <select id="category" onChange={(e) => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected disabled >Select category</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Electronic">Electronic</option>
                <option value="Building or Apartment">Building or apartment</option>
                <option value="Phone">Phone</option>
                <option value="Laptop and pc">Laptop and pc</option>
                <option value="Not defined">Other</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
              <textarea value={disc} onChange={(e) => setDisc(e.target.value)} id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct