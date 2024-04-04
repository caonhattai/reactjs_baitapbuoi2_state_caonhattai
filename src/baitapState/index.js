import React, { Component } from "react";
import data from "./dataGlasses.json";
export default class BaiTapState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassList: data,
      selectGlass: null,
    };
  }
  renderButton = () => {
    return this.state.glassList.map((item) => {
      return (
        <button
          type="button"
          onClick={() => {
            this.setState({ selectedGlass: item });
          }}
          key={item.id}
          className="col-2"
        >
          <img width={100} src={item.url} alt="img" />
        </button>
      );
    });
  };

  renderInfo = () => {
    const { selectedGlass } = this.state;
    if (selectedGlass) {
      return (
        <>
          <div className="modal-glass">
            <img src={selectedGlass.url} alt="img" />
          </div>
          <div className="modal-text">
            <h5>{selectedGlass.name}</h5>
            <p>{selectedGlass.desc}</p>
          </div>
        </>
      );
    } else {
      return (
        <div className="modal-text">
          <p>Please select a glass</p>
        </div>
      );
    }
  };

  render() {
    // const { glassList } = this.state;
    return (
      <>
        <header>
          <p>TRY GLASSES APP ONLINE</p>
        </header>
        <section className="modal-img">
          <img src="./img/model.jpg" alt="img" />
          {this.renderInfo()}
        </section>
        <section className="container glass-list">
          <div className="row">{this.renderButton()}</div>
        </section>
      </>
    );
  }
}
