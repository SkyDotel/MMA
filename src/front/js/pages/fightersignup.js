import React from "react";
import "../../styles/fightersignup.css";


export const Fightersignup = () => {

    return(
        <div>
            <div class="signup-form">
            <form>
                <h2>Register</h2>
<div class="form-row">
  <div class="form-group col-md-4">
    <label for="inputFirstName">First Name:</label>
    <input type="text" class="form-control" id="inputFirstName" ></input>
  </div>
  <div class="form-group col-md-4">
    <label for="inputLastName">Last Name:</label>
    <input type="text" class="form-control" id="inputAddress2" ></input>
    </div>
</div>
    <div class="form-group col-md-6">
    <label for="inputFightName">Fight Name:</label>
    <input type="text" class="form-control" id="inputFightName" ></input>
    </div>
<div class="form-row">
  <div class="form-group col-md-4">
      <label for="inputState">Height:</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>less than 5'4" </option>
        <option>between 5'4" and 5'7" </option>
        <option>between 5'8" and 6'0"</option>
        <option>between 6'0" and 6'4"</option>
        <option>greater than 6'4"</option>
        
      </select>
    </div>
  <div class="form-group col-md-4">
      <label for="inputState">Weight Class:</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Flyweight</option>
        <option>Bantamweight</option>
        <option>Featherweight</option>
        <option>Lightweight</option>
        <option>Middleweight</option>
        <option>Light-Heavyweight</option>
        <option>Heavyweight</option>
      </select>
    </div>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">About you:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="fighting out of..."></textarea>
</div>
    <div class="form-group col-md-4">
      <label for="inputState">Fight Event Date:</label>
      <select id="inputState" class="form-control">
        <option selected>Events added overtime...</option>
        <option>Fight 1: Miami</option>
        <option>Fight 2: Miami</option>
        <option>Fight 3: New York</option>
      </select>
    </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email:</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password:</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
    </div>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Fighter Pic:</label>
  <input class="form-control" type="file" id="formFile"></input>
</div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        I agree that I am an amateur/professional figher with an upcoming sanctioned bout.
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Finish Sign Up</button>
</form>
        </div>
        </div>
    );
};