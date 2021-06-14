import React from 'react';
import './SignIn.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class signin extends React.Component {
  render(){
    return (
      <div>
        {/* <InputPage /> */}
        <body className="back_1">
        <div className="to_center">
        <h1>Sign in </h1>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInput">Your e-mail</label>
          <input type="email" id="exampleInput" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput">Enter Password</label>
          <input type="password" id="exampleInput" className="form-control" />
        </div>
        <br />
        {/* <b_1 /> */}
        <div className="btn_center">
        <button className="submit"><a href="">Submit</a></button>
        </div>
        <hr />
        <div className="footer">
        <footer>
          made with ❤ in India!<br />
        ©Team Dream Achievers
            </footer>
      </div>
        {/* <first_name /> */}
        {/* <last_name /> */}
        
      </div>
      </body>
      </div>
  
  
    );
  }
}
export default signin;