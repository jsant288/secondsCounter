import React from "react";
import PropTypes from "prop-types";

//create your first component

const SecondsCounter = props => {
	let divStyles = "col-2 text-white p-0 text-center";
	return (
		<div className="row justify-content-center bg-dark">
			<i className="col-2 p-0 far fa-clock text-white text-center"></i>

			<div className={divStyles}>{props.digitFive}</div>

			<div className={divStyles}>{props.digitFour % 10}</div>

			<div className={divStyles}>{props.digitThree % 10}</div>

			<div className={divStyles}>{props.digitTwo % 10}</div>

			<div className={divStyles}>{props.digitOne % 10}</div>
		</div>
	);
};
SecondsCounter.propTypes = {
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

export default SecondsCounter;
