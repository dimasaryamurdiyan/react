import React, { Component } from 'react';
// import './App.css';
import Product from './Product';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [
        {
          judul : "Charger HP",
          keterangan : "Lorem ipsum sit dolor amet"
        },
        {
          judul : "Charger Laptop",
          keterangan : "Lorem ipsum sit dolor amet"
        },
        {
          judul : "Charger Mobil",
          keterangan : "Lorem ipsum sit dolor amet"
        },
        {
          judul : "Charger Power Bank",
          keterangan : "Lorem ipsum sit dolor amet"
        },
      ]
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let judul = this.refs.judul.value;
    let keterangan = this.refs.keterangan.value;

    console.log("keterangan = "+keterangan+" judul = "+ judul);
    this.state.products.push({judul,keterangan});
    this.setState({products:this.state.products});//reloadcomponent

    this.refs.form.reset();
  }

  handleDelete = (key)=>{
    console.log(key);
    this.state.products.splice(key,1);
    this.setState({products:this.state.products});
  }

  render() {
    return (
      <div className="row">
        <div className="col m4">

          <div className="card">
            <div className="card-content">
                <div className="row">
                <h3 className="center blue-grey-text text-lighten-1">TAMBAH PRODUK</h3>
                    <form className="col s12" onSubmit={this.handleSubmit} ref="form">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="judul" type="text" ref="judul" className="validate"/>
                                <label htmlFor="judul">Judul</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="keterangan" type="text" ref="keterangan" className="validate"/>
                                <label htmlFor="keterangan">Keterangan</label>
                            </div>
                        </div>
                        <button type="submit" className="waves-effect waves-light btn-small">Tambah</button>
                    </form>
                </div>     
            </div>
          </div>
        </div>
        <div className="col m8">
          <div className="row">
              {this.state.products.map((data,key)=>{
                return (
                  <Product key={key} HapusCard={()=>this.handleDelete(key)} judul={data.judul} keterangan={data.keterangan}/>
                )
              })}
          </div>
            
        </div>
      </div>
    );
  }
}

export default App;
