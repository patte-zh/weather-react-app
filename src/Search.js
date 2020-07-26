import React from "react";
import Button from "react-bootstrap/Button";
export default function Search() {
  return (
    <div>
      <form id="city-form">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              id="city-input"
              type="text"
              placeholder="enter a city..."
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <button
              type="button"
              id="button-search"
              className="btn btn-outline-info"
            >
              search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
