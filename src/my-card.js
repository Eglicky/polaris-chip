import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Epic Racoon";
    this.imageUrl = "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  

  img {
    width: 200px;
    padding: 10px 0;
  }

  .epic {
    font-size: 10px;
    padding: 10px 0;
  }

  .epiccard { 
    background-color: blue;
    width: 300px;
    text-align: clear;
    border-radius: 32px;
    margin: auto;
  }

  #background-change {
    background-color: orange;
  }

  .epiccard-wrap {
    margin-bottom: 16px;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .epicbuttonwow:hover {
    background-color: blue;
  }


  
  render() {
    return html`<div>${this.title}</div>`;
    
    <h2>Controls</h2>
    <div class="epiccard-wrap">
      <button class="duplicate">Clone Card</button>
      <button id="bg-change">Change background</button>
    </div>

    <div id="cardid">
      <div class="epiccard">
        <img src="${this.imageUrl}" alt="Raccoon Image">
        <div>
          <a href="https://www.youtube.com/watch?v=F2YpXC1itEE" class="epic">
            <button class="epicbuttonwow">Epic Raccoon Video</button>
          </a>
        </div>
        <button id="yay">Make Another</button>
        <button id="change-title">Change Title</button>
        <button id="change-image">Change Image</button>
      </div>
    </div>
  `;
}

}

  static get properties() {
    return {
      title: { type: String },
      imageUrl: {type: String}
    };
  }
}

  

globalThis.customElements.define(MyCard.tag, MyCard);


