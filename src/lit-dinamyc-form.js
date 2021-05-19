import { LitElement, html } from 'lit-element';
import { bootstrapStyles } from '../node_modules/@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap-min.js';

export class DinamycForm extends LitElement {

  static get styles() {
    return [bootstrapStyles];
  }

  static get properties() {
    return {
      edit: { type: Boolean },
      data: { type: Object },
    };
  }

  constructor() {
    super();
    this.edit = false;
    this.data = {}
  }

  get titulo() {
    return this.edit ? 'Edit data' : 'Save data';
  }

  get values() {
    return [...this.shadowRoot.querySelectorAll('input,select')].map(input => input.value);
  }

  get valuesObject() {
    const keys = Object.keys(this.data);
    const values = this.values;

    var obj = {};
    for (var i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i];
    }

    return obj;
  }

  saveData(e) {
    this.dispatchEvent(new CustomEvent('send-data', {
      detail: { data: this.values, dataJSON: this.valuesObject }
    }));
    e.preventDefault();
  }

  clear() {
    [...this.shadowRoot.querySelectorAll('input,select')].map(input => input.value = '');
  }

  crearInput(labelText, object) {
    if (object.type === 'select') {
      return html`<label> ${labelText} </label>
<select class="form-control my-1" required>
  <option value='' selected>Selecciona una opción</option>
  ${object.values.map(item => html`<option value=${item.val}>${item.text}</option>`)}
</select>`;
    } else {
      return html`<div class="form-group my-1">
  <label>${labelText}</label>
  <input type="${object.type || text}" value="${object.default || ''}" class="form-control" required />
</div>`
    }
  }


  render() {
    return html`<form id='dinamicForm'>
  ${Object.entries(this.data).map(item => this.crearInput(item[0], item[1]))}
  <button type="submit" class="btn btn-primary my-2" @click="${this.saveData}">${this.titulo}</button>
</form>`
  }

}
customElements.define('lit-dinamyc-form', DinamycForm);