import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";

const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BoxList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;

const BoxText = styled.div`
text-align: center;
`

class App extends Component {
  state = {
    listCar: [
      {
        nome: "Jetta",
        montadora: "Volkswagen",
        preco: 144000,
        tipo: "Sedan"
      },
      {
        nome: "Polo",
        montadora: "Volkswagen",
        preco: 70000,
        tipo: "Hatch"
      },
      {
        nome: "T-Cross",
        montadora: "Volkswagen",
        preco: 123000,
        tipo: "SUV"
      },
      {
        nome: "Tiguan R-line",
        montadora: "Volkswagen",
        preco: 146000,
        tipo: "SUV"
      },
      {
        nome: "Civic",
        montadora: "Honda",
        preco: 115000,
        tipo: "Sedan"
      },
      {
        nome: "Corolla",
        montadora: "Toyota",
        preco: 110000,
        tipo: "Sedan"
      },
      {
        nome: "Corolla Cross",
        montadora: "Toyota",
        preco: 184000,
        tipo: "SUV"
      },
      {
        nome: "Compass",
        montadora: "jeep",
        preco: 132000,
        tipo: "SUV"
      },
      {
        nome: "Golf GTI",
        montadora: "Volkswagen",
        preco: 138000,
        tipo: "Hatch"
      }
    ],
    addCar: []
  };

  componentDidMount() {
    const nCar = this.state.listCar.map((item) => {
      console.log(Math.random() * 1000);
      return {
        ...item,
        id: Math.random() * 1000
      };
    });
    this.setState({
      listCar: nCar
    });
  }

  add = (event, id) => {
    event.preventDefault();
    this.setState({
      addCar: this.state.addCar.concat(
        this.state.listCar.filter((item) => {
          return item.id === id;
        })
      )
    });
  };

  remove = (id) => {
    this.setState({
      addCar: this.state.addCar.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <BoxText>
        <h1>Loja de Carros!</h1>
      <BoxMain>
        <BoxList>
          {this.state.listCar.map((item, index) => (
            <section class="box-container" key={index}>
              <div class="box-col">
                <p><b>{item.nome}</b></p>
                <button
                  onClick={(event) => {
                    this.add(event, item.id);
                  }}
                >
                  +
                </button>
              </div>
              <div class="box-desc">
                <p><b>Montadora:</b> {item.montadora}</p>
                <p><b>
                  Preço:</b>{" "}
                  {item.preco.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>
                <p><b>Tipo:</b> {item.tipo}</p>
              </div>
            </section>
          ))}
        </BoxList>
        <div class="box-list">
          {this.state.addCar.map((item, index) => (
            <section class="box-container-list" key={index}>
              <div class="box-col-list">
                <p>{item.nome}</p>
                <button class="button-list"
                  onClick={() => {
                    this.remove(item.id);
                  }}
                >
                  -
                </button>
              </div>
              <div class="box-desc-list">
              <p>Tipo: {item.tipo}</p>
                <p>
                  Preço:{" "}
                  {item.preco.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>
              </div>
            </section>
          ))}
        </div>
        <div class="box-full">
          <h2>Total</h2>
          <b>{this.state.addCar
            .reduce((aCum, vlTot) => aCum + vlTot.preco, 0)
            .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</b>
        </div>
      </BoxMain>
      </BoxText>
    );
  }
}

export default App;
