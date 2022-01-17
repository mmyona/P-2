export default class {
    constructor() {
        document.title = "Posts";
    }
    async getHtml() {
        return `
        <div class="page>
            <h2>This is Posts Page</h2>
        </div>
        `;
    }
}