# <dinamyc-form>

Web component to create a dinamyc form, based on LitElement

**Use the component**

```
<lit-dinamyc-form></lit-dinamyc-form>
```

## Properties

- edit: boolean atribute that changue the text of the button to "Edit data" or "Saved data" .
- data: retriview a json object witch will be used to create the form template

### Behaviour

- The component create dinamycs <input> or <select> into the DOM when the data object is passed.

## data properties
Custom property | Description | Default
----------------|-------------|---------
--type | Element type | text
--default | Element value that will show in the tag | ''
--values | Element values only available when the type is select | []


### component
This element acts as form. So, you can listen the native `clic` event.
```
 const myForm = document.querySelector('lit-dinamyc-form');
 
 myForm.addEventListener('send-data', (e) =>{
    // Data as array
    console.log(e.detail.data);
    // Data as JSON
    console.log(e.detail.dataJSON);
})
```
