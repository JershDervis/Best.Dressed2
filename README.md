# Best.Dressed

## Plan:

- [x] Users can register
- [ ] Registered Users can create 'parties'
- [ ] A user can connect a party to a FB event? Pull in details
- [ ] A user can connect a party to a Spotify playlist for live updates on dashboard
- [ ] A party has a unique id (key) which will be a dynamic route e.g. /p/1a2b3c4d
- [ ] Parties have QR code shorcuts. E.g. a begin voting QR code for patrons to cast their votes
- [ ] A party dashboard receives/displays realtime updates for new partygoers
- [ ] A party dashboard displays a gallery of the partygoers and their outfits
- [ ] A party dashboard can be remotely controlled by the host (creator of party)
- [ ] A host can invite party 'admins' to help manage the party (incase the host is too drunk!)

- [ ] A host should be able to change a party settings:
- [ ] Setting: Anyone with the link can vote
- [ ] Setting: Anyone with the link can add themselves to the best dressed competition
- [ ] Setting: Only invited users can add themselves to the best dressed competition
- [ ] Setting: Only invited users can add multiple people to the competition <-- Should work in conjunction with above settings. E.g. Only registered users can add multiple people to the competition

## The Stack

- [x] [Sveltekit](https://kit.svelte.dev/) - Meta-Framework
- [x] [Typescript](https://www.typescriptlang.org/) - Typing
- [x] [TailwindCSS](https://tailwindcss.com/) // [DaisyUI](https://daisyui.com/) - Styling
- [x] [Trpc](https://trpc.io/) - Typesafe API
- [x] [Prisma](https://www.prisma.io/) - Database ORM
- [x] [Authjs](https://authjs.dev/) - User authentication
- [ ] [Pusher](https://pusher.com/) - Realtime updates

Second go at this using prefered technologies this time around.
