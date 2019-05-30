import React, { useState } from "react";

function PersonDetails(props) {
  if (props.selectedPerson) {
    const {name, phone, district, office} = props.selectedPerson
    return (
    <div>
      <div>{name}</div>
      <div>{phone}</div>
      <div>{district}</div>
      <div>{office}</div>
    </div>
    )
  } else {
    return (
      <div>
        <div>name</div>
        <div>District</div>
        <div>Phone</div>
        <div>Office</div>
      </div>
    );
  }
}

export default PersonDetails;
