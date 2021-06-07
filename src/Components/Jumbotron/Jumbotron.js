import React from "react";
function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4" />
			<p>
				This is the website for 4 GEEKS the page have a lot of
				information for developments{" "}
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action
			</a>
		</div>
	);
}

export default Jumbotron;