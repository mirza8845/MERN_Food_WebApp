import React, { useState, useEffect } from "react";
import pizzaMnue from "../Assets/dummyData";
import PizzaComp from "../Components/PizzaComp";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../redux/actions/pizzaAction";
// import moment from "moment";

const Home = () => {
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  console.log("pizzaState", pizzaState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  // console.log(Date.now());
  // var d = new Date("2020-04-13T00:00:00.000+08:00");
  // console.log(d.toLocaleTimeString());
  // const date = new Date();
  // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
  // console.log(date.DateTimeFormat().resolvedOptions().timeZone);
  // console.log(date.get());
  // console.log(moment.tz.guess());
  console.log("jfkwejad", pizzaState?.error?.message);
  return (
    <div>
      <div className="row justify-content-center">
        {pizzaState &&
          pizzaState?.pizzas &&
          pizzaState?.pizzas.map((item) => (
            <div className="col-md-4" style={{}}>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <PizzaComp compData={item} />
              </div>
            </div>
          ))}
        <p>{pizzaState?.error?.message}</p>
      </div>
    </div>
  );
};

export default Home;
