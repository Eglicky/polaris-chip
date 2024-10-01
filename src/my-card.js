import { LitElement, html, css } from 'lit';
import '@haxtheweb/multiple-choice/lib/true-false-question.js';

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
    this.title = "Epic Raccoon";
    this.imageUrl = "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: Arial;
      }

      :host(.fancy){
        .epiccard{
        background-color: pink;
        width: 300px;
        text-align: center;
        border-radius: 32px;
        margin: auto;
        }
      }

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
        text-align: center;
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
    `;
    
}


render() {
  return html`
    <div class="epiccard">
      <h1>${this.title}</h1>
      <p>${this.text}</p>
      <details @toggle="${this.fancyToggle}">
        <summary>Description</summary>
        <div>
          <slot>This is an EPIC Raccon that is also a jedi. May the force be with you. Do not try to get rid of jedi racoon. Jedi racoon has killed epic racoon.
          <true-false-question question="Is water wet?">
  <input type="checkbox" value="Yes, obv." correct="correct" role="textbox">
  <input type="checkbox" value="No, bruh.">
</true-false-question>
          </slot>
        </div>
      </details>
      <img src="${this.imageUrl}" alt="Raccoon Image">
      <div>
        <a href="https://www.youtube.com/watch?v=F2YpXC1itEE" class="epic">
          <button class="epicbuttonwow">Epic Raccoon Video</button>
        </a>
      </div>
      <div class="epiccard-wrap">
        <button class="duplicate">Clone Card</button>
        <button @click="${this.toggleFancy}" id="bg-change">Change background</button>
      </div>
      <button @click="${this.changeTitle}" id="change-title">Change Title</button>
      <button @click="${this.changeImage}" id="change-image">Change Image</button>
    </div>
  `;
}

  static get properties() {
    return {
      title: { type: String },
      imageUrl: { type: String },
      fancy: {type: Boolean}
    };
  }

  changeTitle() {
    this.title = "Fancy Epic Raccoon"
  }

  changeImage() {
    this.imageUrl = "https://img.freepik.com/premium-photo/epic-jedi-raccoon-4k-ultradetailed-cinematic-shot_785229-3575.jpg?w=1060";
  }

  bringOGCardBack() {
    this.title = this.OGTitle;
    this.imageUrl = this.OGImage;

   
  }

fancyToggle(event) {
  this.fancy = event.target.open;
  if (this.fancy) {
    this.classList.add('fancy');
    this.changeImage();
    this.changeTitle();
  } else {
    this.classList.remove('fancy');
    this.bringOGCardBack();
    }
    
  }



}
// Register the custom element with the browser
customElements.define(MyCard.tag, MyCard);
