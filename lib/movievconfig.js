import Movie from '@/scrapes/cinesubz/movie';
import AuthService from '../../authservice';
import { cinesubzBaseUrl, isCinesubz } from '../../config';

export async function GET(req) {
    return AuthService.authenticate(req, async (validatedReq) => {
        const { searchParams } = new URL(validatedReq.url);
        const url = searchParams.get('url');

        if (!url) {
            return new Response(
                JSON.stringify({ error: 'Url parameter is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
        if (!isCinesubz(url)) {
            return new Response(
                JSON.stringify({ error: 'Please give me ' + cinesubzBaseUrl + 'movies url' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
        try {
            const cineMovie = new Movie(url);
            const result = await cineMovie.process();
            const status = result.data ? 200 : 500;
            return new Response(
                JSON.stringify(result),
                { status: status, headers: { 'Content-Type': 'application/json' } }
            );
        } catch (error) {
            return new Response(
                JSON.stringify({ error: error.message }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }
    })
}
