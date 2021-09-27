import React from "react";
import PropTypes from "prop-types";
import ICON_REMOVE from "./icon-remove";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const IconRemove = ({
  size,
  color,
  icon,
  className,
  style = defaultStyles,
  viewBox,
}) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={ICON_REMOVE[icon]} />
    </svg>
  );
};

IconRemove.defaultProps = {
  size: 16,
  color: "#000000",
  viewBox: "0 0 24 24",
  style: {},
  className: "",
};

IconRemove.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default IconRemove;
