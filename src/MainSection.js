import data from "./data.json";
import { useState } from "react";

export default function MainSection(props) {

  const [cartAdd, setCartAdd] = useState([])

  const cartButton = (id) => {
    console.log(cartAdd)
    if(cartAdd.includes(id)){
      props.handleRemove()
      setCartAdd(cartAdd.filter((a)=>a!==id))
    }
    else{
      props.handleSubmit();
      setCartAdd([...cartAdd,id])
    }
  }
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.productValue.map((value) => (
            <div className="col mb-5" key={value.id}>
              <div className="card h-100">
                {value.badge ? (
                  <div
                  className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                ) : (
                  ""
                )}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{value.cardTitle}</h5>
                    {value.rating ? (
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {value.rating > 0
                          ? Array.from({ length: value.rating }).map(
                              (_, id) => <div className="bi-star-fill"></div>
                            )
                          : ""}
                      </div>
                    ) : (
                      ""
                    )}

                    {value.disCountPrice ? (
                      <span className="text-muted text-decoration-line-through">
                        {value.disCountPrice}
                      </span>
                    ) : (
                      ""
                    )}
                    {value.price}
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    
                    {value.btnText === "View Options" ? (
                      <button className="btn btn-outline-secondary">
                        {value.btnText}
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-secondary"
                        onClick={()=>cartButton(value.id)}
                      >
                        {cartAdd.includes(value.id) ? "Remove from Cart" : value.btnText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
