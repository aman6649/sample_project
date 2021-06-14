// import logo from './logo.svg';
import Card from './card';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="full_body">
      <div className="topnav">
        <div className="topnav-centered">
          <a href="#home" className="active"><h1>Profolio</h1></a>
        </div>
        <a href="#news">Home</a>
        <div className="topnav-right">
          <a href="#search">Your Profile</a>
        </div>
      </div>
      <div className="side_nav">
      <div className="left">
        <ul className="nav">
          <li><a>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Location</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput" />
            </div>
          </a></li>
          <li className="size_extend"><a>
          <div>
          <select className="browser-default custom-select extend_degree">
            <option>Degree</option>
            <option value="1">Bachelor's</option>
            <option value="2">Master's</option>
            <option value="3">Associate</option>
            <option value="4">Ph D.</option>
            <option value="5">Pursuing Degree</option>
          </select>
        </div>
            </a></li>
          <li className="size_extend"><a>
          <div>
          <select className="browser-default custom-select">
            <option>Job types</option>
            <option value="1">Full time</option>
            <option value="2">Part time</option>
            <option value="3">Temporary</option>
            <option value="4">Intern</option>
          </select>
        </div>
            </a></li>
          <li className="size_extend"><a>
          <div>
          <select className="browser-default custom-select">
            <option>Work Experience Level</option>
            <option value="1">Beginner</option>
            <option value="2">Intermediate</option>
            <option value="3">Expert</option>
          </select>
        </div>
            </a></li>
        </ul>

      </div>
      </div>
      <div>
        <Card name="aman" email="aaaa" skill="www"/>
      </div>
    </div>
  );
}

export default App;
