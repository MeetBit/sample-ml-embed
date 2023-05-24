# MeetBit Sample Meeting Link Embed
This is a sample NextJS application on how to embed MeetBit Meeting Links.

## Requirements

Before getting started, make sure you **have the following installed** on your system:

- **Node 16.14.x**  (use nvm to install)
- **Yarn 1.2x.x**

## Getting Started

Before starting MeetBit Sample Meeting Link Embed for the first time, make sure you meet the requirements above and have all necessary environment variables. Then, run:

```bash
npm install

#or

yarn
```

To run MeetBit Sample Meeting Link Embed on your local machine for development.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables
This requires a few environment variables to run. Create a `.env` file in the project's root with the following values:
| Key                                   | Value                                      |
| ------------------------------------- | ------------------------------------------ |
| NEXT_PUBLIC_NORMAL_MEETING_LINK_ID    | *meeting link ID of normal meeting link    |
| NEXT_PUBLIC_PROTECTED_MEETING_LINK_ID | *meeting link ID of protected meeting link |
| CLIENT_ID                             | *retrieve from @MeetBit                    |
| CLIENT_SECRET                         | *retrieve from @MeetBit                    |
| REFRESH_TOKEN                         | *retrieve from @MeetBit                    |

## Additional Resources
- [MeetBit Guest App Guide](https://link.meetbit.io/guest-app-guide)
- [MeetBit Public API Documentation](https://meetbit.stoplight.io/docs/meetbit-public-api/)

## License
MeetBit Sample Meeting Link Embed is proprietary software by [MeetBit Inc](https://meetbit.io).

