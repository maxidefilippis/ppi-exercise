import { apiMsg } from '../translations/en/api';

export async function apiConnect(url: string, method: string, body: any = null): Promise<any> {
    try {
        const options: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
            },
            method,
            body: body ? JSON.stringify(body) : null,
        };

        let response = await fetch(url, options);
        response = await response.json();

        return response;
    } catch (error: any) {
        console.error(apiMsg.error, error.message);
        throw error;
    }
}
