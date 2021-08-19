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
    const block = [];
    event.preventDefault();
    const form = document.forms.locationFromPin;
    const pincode = form.Pincode.value;
    //Pincode must be of length 6
    if (pincode.length !== 6) {
      block.push("Invalid Input");
      this.setState({ address: block });
      return;
    }
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => response.json())
      .then((jsonData) => {
        block.push(jsonData[0].PostOffice[0].Block);
        this.setState({ address: block });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const location = this.state.address.map((block) => (
      <Location blockName={block} />
    ));
    return (
      <div class="flex justify-around items-center mt-20 h-full w-full">
        <div class="shadow-2xl p-10 rounded-lg">
          <form name="locationFromPin" onSubmit={this.getLocation}>
          <div  class="flex flex-col mb-4">
            <label class="mb-2 uppercase font-bold text-lg text-gray-600">Enter your pin</label>
            <input class="border py-2 px-3" type="text" name="Pincode" placeholder="Pincode" />
            <button class="block bg-gray-400 hover:bg-gray-800 text-black uppercase text-sm mx-auto m-2 p-3 rounded">Search</button>
            </div>
            <div>
          <span>{location}</span>
        </div>
          </form>
          </div>
      </div>
    );
  }
}

export default PincodePage;
