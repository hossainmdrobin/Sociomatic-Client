export const getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_BASE_URL_DEV || 'http://localhost:5000';
}