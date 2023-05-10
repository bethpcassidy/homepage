import "./index.css";
export function PostsIndex(props) {
  return (
    <div class="card-container d-flex w-100 h-100 p-3 mx-auto flex-column" id="PIndex">
      <div class="card text-center bg-dark">
        <div class="sep">
          <div class="card-header">
            <h2 class="title-card">EZWeather</h2>
          </div>
          <div class="images-container">
            <img
              className="card-img"
              src="https://drive.google.com/uc?export=view&id=1KXn-fXXztjMacZcP7cVIyvtLVuHWmy5z"
              alt="Card image"
            />
            <img
              className="card-img"
              src="https://pbs.twimg.com/profile_images/1591121427893190664/LtkaUCDu_400x400.jpg"
              alt="Card image"
            />
            <img
              className="card-img"
              src="https://drive.google.com/uc?export=view&id=1DoBbCiej1hrWHkrZB7MSZPPLMnHwAPKw"
              alt="Card image"
            />
            <div className="images-container" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Weather, geocoding and data processing.</h5>
            <p className="card-text">
              EZWeather is a website that gathers and displays weather information for registered users. It uses
              geocoded api data to determine the weather forecast at the center of a given zipcode, by processing
              information for the next 24 hour period based on when the last ping was made. Generated forecasts are
              saved to users so that they can be easily accessed on login.
            </p>
            <button className="btn btn-dark" onClick={() => props.onShowPost(post)}>
              Github Page
            </button>
          </div>
        </div>
        <div class="sep">
          <div class="card-header">
            <h2 class="title-card">SPA Blog Template</h2>
          </div>
          <div class="images-container">
            <img
              className="card-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="Card image"
            />
            <img
              className="card-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt="Card image"
            />
            <img
              className="card-img"
              src="https://i.pinimg.com/236x/bc/f0/83/bcf0832be7234aef28f62be32e0c216f--object-oriented-programming-javascript.jpg"
              alt="Card image"
            />
            <div className="images-container" />
          </div>
          <div className="card-body">
            <h5 className="card-title">SPA Blog, OOP, and Styling</h5>
            <p className="card-text">
              This is an OOP based blog that is styalized to show off someone's portfolio. Features components from
              Bootstrap, CoreUI, cahilfoley's React-Snowfall, React Router, all organized in a stardard one page web
              application. It's actually the template I used to create this website, though I had to get rid of the
              backened when hosting it on github.
            </p>
            <button className="btn btn-dark" onClick={() => props.onShowPost(post)}>
              Github Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
