export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class PropertyRequiredError extends ValidationError {
    property: string;

    constructor(property: string) {
        super(`Missing property: ${property}`);
        this.name = 'PropertyRequiredError';
        this.property = property;
    }
}

export class ElementNotFoundError extends Error {
    element: string;

    constructor(element: string) {
        super(`${element} not found`);
        this.name = 'ElementNotFoundError';
        this.element = element;
    }
}
