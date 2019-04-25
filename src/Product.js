import React from 'react';
// import './Product.css';
import logo from './logo.svg';
// import './App.css';

class Product extends React.Component {
    render() {
        return (
            <div className="col m4">
              <div className="card">
                <div className="card-image">
                    <img src={logo}/>
                    <br/><br/><br/><br/>
                    <span className="card-title blue-grey-text text-lighten-1">{this.props.judul}</span>
                    
                </div>
                <div className="card-content">
                  <p>{this.props.keterangan}</p>
                </div>
                <div className="card-action">
                <a onClick={this.props.HapusCard} className="waves-effect waves-light red darken-4 btn-small"><i className="material-icons right">restore_from_trash</i>Hapus</a>
                </div>
              </div>
            </div>
          
            // <div className="box">
            //     <img src={logo} className="App-logo" alt="logo"/>
            //     <h3 className="ungu">{this.props.judul}</h3>
            //     <h5 className="orange">{this.props.harga}</h5>
            //     <button className="btn btn-blue">Tambah ke Keranjang</button>
            // </div>
        );
    }
}

export default Product;