export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
        <div class="page">
            <h1>This is Home Page</h1>
        </div>
        `;
    }
}