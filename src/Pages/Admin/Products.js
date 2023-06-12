import React, { useState, useEffect } from "react";
import AdminMenu from "../../Components/Layout/Adminmenu";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { API } from "../../Global";

const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${API}/api/products/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Bike List</h1>
            <div className="d-flex flex-wrap g-2 product_container">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/products/${p.slug}`}
                  className="product-link"
                >
                  <div className="card m-2 shadow" style={{ width: "18rem" }}>
                    <img src={p.photo} className="card-img-top" alt={p.name} />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;