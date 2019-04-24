import React, { Component } from 'react';
// import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col m4">
          
          <div className="card">
            <div className="card-content">
                <div className="row">
                <h3 className="center blue-grey-text text-lighten-1">TAMBAH PRODUK</h3>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="judul" type="text" className="validate"/>
                                <label for="judul">Judul</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="keterangan" type="text" className="validate"/>
                                <label for="keterangan">Keterangan</label>
                            </div>
                        </div>
                    </form>
                </div>
                <a class="waves-effect waves-light btn-small">Tambah</a>
            </div>
          </div>
        </div>
        <div className="col m8">
            <Product judul="Charger HP" keterangan="Lorem opsum sit dolor amet"/>
            <Product judul="Charger HP" keterangan="Lorem opsum sit dolor amet"/>
            <Product judul="Charger Laptop" keterangan="Lorem opsum sit dolor amet"/>
            <Product judul="Charger Motor" keterangan="Lorem opsum sit dolor amet"/>
        </div>
      </div>
    );
  }
}

export default App;
