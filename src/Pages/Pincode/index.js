import React from "react";

class Location extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.blockName}</h1>
      </div>
    );
  }
}
class PincodePage extends React.Component {
  constructor() {
    super();
    this.state = { address: ["Enter a pincode to check location"] };
    this.getLocation = this.getLocation.bind(this);
  }
  getLocation(event) {
    event.preventDefault();
    const form = document.forms.locationFromPin;
    const pincode = form.Pincode.value;
    const block = [];
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((jsonData) => {
        block.push(jsonData[0].PostOffice[0].Block)
        this.setState({ address: block });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const location = this.state.address.map((block) => (
      <Location blockName={block}/>
    ));
    return (
      <div>
        <div>
          <span class="mx-10 my-10 text-gray-500">
            This is the Pin Code Checking page
          </span>
          <form name="locationFromPin" onSubmit={this.getLocation}>
            <input type="text" name="Pincode" placeholder="Pincode" />
            <button>Add</button>
          </form>
          <div>{location}</div>
        </div>
      </div>
    );
  }
}

export default PincodePage;
