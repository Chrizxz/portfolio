/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const redirects = new Map([
        ["/discord", "https://discord.gg/ZJ9PwQEC6E"],
        ["/medium", "https://chrizftw.medium.com"],
        ["/twitch", "https://twitch.tv/chrizxzftw"],
        ["/bio", "https://dsc.bio/chriz"],
        ["/reddit", "https://reddit.com/user/chrizxzftw"],
        ["/github", "https://github.com/chrizxz"],
        ["/youtube", "https://www.youtube.com/channel/UCCSomYE1NzcG2AnOtrR5V3g?sub_confirmation=1"],
        ["/roblox", "https://www.roblox.com/users/729731435/profile"],
        ["/playlist", "https://open.spotify.com/playlist/2jY8XKNHjYmR3UhOHW4Zb6?si=a4595c5b92664f3f"],
        ["/pl", "https://open.spotify.com/playlist/2jY8XKNHjYmR3UhOHW4Zb6?si=a4595c5b92664f3f"],
        // ["/playlist2", "https://open.spotify.com/playlist/4Ob6cNM3147iFcIMDDtYnp?si=23890ac10d6744fc"],
        // ["/pl2", "https://open.spotify.com/playlist/4Ob6cNM3147iFcIMDDtYnp?si=23890ac10d6744fc"],
        ["/playlist2", "https://open.spotify.com/playlist/6aqs0yCZr7MIBRmfP4wMF4?si=bb62661a876f44a4"],
        ["/pl2", "https://open.spotify.com/playlist/6aqs0yCZr7MIBRmfP4wMF4?si=bb62661a876f44a4"],
        ["/playlist3", "https://open.spotify.com/playlist/0AJWs2wvPlKIN3pa3T2B2Q?si=25329ca16a8e41c3"],
        ["/pl3", "https://open.spotify.com/playlist/0AJWs2wvPlKIN3pa3T2B2Q?si=25329ca16a8e41c3"],
        ["/steam", "https://steamcommunity.com/id/chrizftw/"],
        ["/minecraft", "https://namemc.com/chrizxz"],
        ["/spotify", "https://open.spotify.com/user/3lzvwkeppejdqmri51h330vza"],
        ["/twitter", "https://twitter.com/ChrizxzFTW"],
        ["/venox", "https://discord.com/invite/gAeMxAv9kp"],
        ["/chrizical", "https://www.urbandictionary.com/define.php?term=chrizical"],
        ["/wordler/invite", "https://discord.com/api/oauth2/authorize?client_id=1077433194166620180&permissions=278099396672&scope=applications.commands%20bot"],
        ["/wordler/tos", "https://gist.github.com/Chrizxz/f35117d847dcea193f3795b5c7199656"],
        ["/wordler/privacy", "https://gist.github.com/Chrizxz/84ae54cab3d291aab890cc556dd088a0"],
        ["/donate", "https://ko-fi.com/chrizxzftw"],
        ["/pay", "https://ko-fi.com/chrizxzftw"],
        ["/links", "https://beacons.ai/chrizxzftw"],
    ]);

    if (redirects.has(event.url.pathname)) {
        return Response.redirect(redirects.get(event.url.pathname), 302);
    }

    if (redirects.has(event.url.pathname)) {
        const destination = redirects.get(event.url.pathname);
        console.log(`[${event.getClientAddress()}] ${event.url.pathname} → ${destination}`);
        return Response.redirect(destination, 302);
    }

    const BOT_PATTERNS = [/\.php(\d|$)/, /wp-admin/, /wp-includes/, /wp-content/, /wp-config/, /wp-trackback/, /\.env/, /alfa/];
    if (BOT_PATTERNS.some(p => p.test(event.url.pathname))) {
        return new Response('Not found', { status: 404 });
    }

    return resolve(event);
}

// Suppress 404 console spam (bots, robots.txt, .well-known, etc.)
/** @type {import('@sveltejs/kit').HandleError} */
export function handleError({ error }) {
    if (error?.status === 404) {
        return { message: 'Not found' };
    }
    console.error(error?.stack);
    return { message: 'Internal error' };
}
