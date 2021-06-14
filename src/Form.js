import './form.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function Cform() {
    return (
      <div className="to_center">
        <h1>Sign up form</h1>
        <br />
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">First Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput">Your e-mail</label>
          <input type="email" id="exampleInput" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput">Enter Password</label>
          <input type="password" id="exampleInput" className="form-control" />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInput">Enter College Name </label>
          <input type="text" id="exampleInput" className="form-control" />
        </div>
        <br />
        <div>
          <select className="browser-default custom-select">
            <option>Select Degree</option>
            <option value="1">B.tech</option>
            {/* <option value="2"></option>
            <option value="3">Expert</option> */}
          </select>
        </div>
        <br />
        <br />
        <div>
          <select className="browser-default custom-select">
            <option>Work Experience Level</option>
            <option value="1">Beginner</option>
            <option value="2">Intermediate</option>
            <option value="3">Expert</option>
          </select>
        </div>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="exampleInput">Enter Your location</label>
          <input type="email" id="exampleInput" className="form-control" />
        </div>
        <div className='custom-control custom-switch'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitches'
            readOnly />
          <label className='custom-control-label' htmlFor='customSwitches'>
            Find job at your location
          </label>
        </div>
        <br />
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Upload Your Resume
      </span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              select file
      </label>
          </div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Write about yourself
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4" />
        </div>
      </div>
    );
  }
  
  
  let Footerform = () => {
    return (
      <div className="footer">
        <footer>
          made with ❤ in India!<br />
        ©Team Dream Achievers
            </footer>
      </div>
    );
  }
  
  // let b_1 = () => {
  //   return (
  //     <div className="back_1">
  //       <p>Hello</p>
  //       {/* <img src="https://previews.123rf.com/images/vinsalow/vinsalow1705/vinsalow170500026/78645097-grunge-texture-summer-colors-background-hd-photo-light-earth-concept.jpg" /> */}
  //     </div>
  //   );
  // }
  
  
  function ClientSignupForm() {
    return (
      <div>
        {/* <InputPage /> */}
        <body className="back_1">
        <Cform/>
        {/* <b_1 /> */}
        <div className="btn_center">
        <button className="submit"><a href="">Submit</a></button>
        </div>
        <hr />
        <Footerform />
        {/* <first_name /> */}
        {/* <last_name /> */}
        </body>
      </div>
    );
  }
  
  export { ClientSignupForm, Cform, Footerform };