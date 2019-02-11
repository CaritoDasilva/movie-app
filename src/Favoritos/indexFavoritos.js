// /*global firebase*/

// import React, { Component } from 'react'
// // eslint-disable-next-line no-unused-vars
// import firestore from "../Firebase/firestore";
// import firebase from 'firebase';




// export default class Favoritos extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             description: ''


//         };
//         this.addFavorite = this.addFavorite.bind(this);
//     }

//     updateInput = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     addFavorite = e => {
//         e.preventDefault();
//         const db = firebase.firestore();
//         db.settings({
//         });
//         const userRef = db.collection('favorites').add({
//             name: this.state.name,
//             description: this.state.description
//         });
//         this.setState({
//             name: '',
//             description: ''
//         });
//     };
//     render() {
//         return (
//             <form onSubmit={this.addFavorite}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Nombre Película"
//                     onChange={this.updateInput}
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Descripción"
//                     onChange={this.updateInput}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }

