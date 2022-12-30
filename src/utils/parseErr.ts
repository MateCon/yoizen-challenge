export default function parseErr(err: Error): {
    status: number;
    message?: string;
} {
    const { name, message } = err;
    switch (name) {
        case 'ZodError':
            return { status: 400, message: 'Invalid data' };
        case 'CastError':
            return { status: 400, message: 'Invalid data' };
        case 'ValidationError':
            return { status: 400, message };
        case 'ElementNotFoundError':
            return { status: 404, message };
        default:
            return { status: 500, message };
    }
}
