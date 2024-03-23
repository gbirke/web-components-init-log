class MyComponent extends HTMLElement {
	constructor() {
		console.log("MyComponent: constructor start");
		super()
		console.log("MyComponent: super called");
		console.log("MyComponent: constructor end");
	}

	connectedCallback() {
		console.log("MyComponent: connectedCallback start")
		const index = this.getAttribute('component-index');
		this.innerHTML = `<em>My component with index ${index}</em>`
		console.log(`MyComponent: connectedCallback end with component-index ${index}`)
	}

	static get observedAttributes() {
		console.log("MyComponent: observed attributes were read");
		return ['component-index'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log("MyComponent: attributeChangedCallback called", {name, oldValue, newValue});
	}
}
console.log("registering element 'MyComponent'");
window.customElements.define('my-component', MyComponent);
