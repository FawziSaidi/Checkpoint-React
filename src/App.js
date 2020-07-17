import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <section class="form-gradient">
       <div class="card">
        <div class="header pt-3 peach-gradient">
          <div class="row d-flex justify-content-center">
            <h3 class="white-text mb-3 pt-3 font-weight-bold">Register</h3>
          </div>
        <div class="row mt-2 mb-3 d-flex justify-content-center">
            <a class="fa-lg p-2 m-2 fb-ic"><i class="fab fa-facebook-f white-text fa-lg"></i></a>
            <a class="fa-lg p-2 m-2 tw-ic"><i class="fab fa-twitter white-text fa-lg"></i></a>
            <a class="fa-lg p-2 m-2 gplus-ic"><i class="fab fa-google-plus-g white-text fa-lg"></i></a>
          </div>
        </div>
        <div class="card-body mx-4 mt-4">
          <div class="md-form">
            <input type="text" id="Form-email3" class="form-control" placeholder="name@example.com"/>
            <label for="Form-email3">Your email</label>
          </div>
          <div class="md-form pb-1 pb-md-3">
            <input type="password" id="Form-pass3" class="form-control"  placeholder="Please choose a password atleast 8 characters long, using diversified chains of numbers.."/>
            <label for="Form-pass3">Your password</label>

            <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#" class="dark-grey-text ml-1 font-weight-bold">Password?</a></p>
          </div>
          <div class="row d-flex align-items-center mb-4">
            <div class="col-md-1 col-md-5 d-flex align-items-start">
              <div class="text-center">
                <button type="button" class="btn btn-grey btn-rounded z-depth-1a">Log in</button>
              </div>
            </div>
            <div class="col-md-7">
              <p class="font-small grey-text d-flex justify-content-end mt-3">Don't have an account? <a href="#" class="dark-grey-text ml-1 font-weight-bold"> Sign up</a></p>
            </div>
          </div>
        </div>
        </div>
        </section>
    </div>
  );
}

export default App;
