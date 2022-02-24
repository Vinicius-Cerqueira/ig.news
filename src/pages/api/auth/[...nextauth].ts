import { query as q } from 'faunadb';

import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { client } from '../../../services/fauna';

// GITHUB_ID=869bceded8c65edc53e2
// GITHUB_SECRET=adb804f018e4d379b881c20878e813b5bbb9a5b6

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;
      console.log({ email });

      try {
        await client.query(
          q.If(
            q.Not(q.Match(q.Index('user_by_email'), q.Casefold(user.email))),
            q.Create(q.Collection('users'), { data: { email } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        );
        return true;
      } catch {
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
