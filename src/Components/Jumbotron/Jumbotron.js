import React from "react";
function Jumbotron() {
	return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12 bg-light py-5">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis sit amet tortor non pharetra. Donec in neque id tellus pretium molestie eget at lectus. Donec elementum, leo et dignissim hendrerit, diam lorem convallis nibh, eu dignissim nulla lacus et tortor. Fusce at mauris pulvinar, condimentum nibh sed, venenatis leo. Ut quis nibh urna. Nunc euismod, sapien quis mollis pharetra, lorem justo vehicula tortor, at congue tortor arcu vel velit. Pellentesque cursus quam odio, quis elementum eros placerat vel. 
            </p>

            <a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action
			</a>
          </div>
        </div>
      </div>
	);
}

export default Jumbotron;