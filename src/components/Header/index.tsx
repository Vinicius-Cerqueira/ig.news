import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
// STRIPE_API_KEY=sk_test_51KX3etFu1yPVlUjX4BitKUCvTDM3lNs0KdEFg8DQbal7HZEOBWKaC2PGN8Q2ATyiCArDRAo6RUU005QwRvkxqtPQ00JsyaOSGJ
// STRIPE_SUCCESS_URL=http://localhost:3000/posts/
// STRIPE_CANCEL_URL=http://localhost:3000/
// STRIPE_WEBHOOK_SECRET=whsec_34c3f7826f384d7fef2518696a976759587d53e71a80fdffefd1cd71d59a3c4a
// NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51KX3etFu1yPVlUjXAh8jOmKUIpkvfAWkDeodHScoA7A1uv4u1TwWAcOKRXKVLM8b3B3GLrZNgXk0yfGaPmUEprQM00m6OAGBeI
// NEXTAUTH_SECRET=6exRQ7s9CEl+dV6ZED9qaaLvD2hyzJ4anA/6sOBKQ9g=
// NEXTAUTH_URL=http://localhost:3000/api/auth
// GITHUB_ID=869bceded8c65edc53e2
// GITHUB_SECRET=9b7c860509b1338219e181c832c5ccdd994c3777
// FAUNADB_KEY=fnAEgxJMklAAQ1ceZaeT9Nt-PBLvA73YZO1Mmp7H
// PRISMIC_ACCESS_TOKEN=MC5ZaWQ1TEJFQUFDVUFKZk1J.77-977-9de-_vVrvv71l77-9NO-_vVHvv73vv71E77-977-9ae-_ve-_ve-_vWd877-977-977-977-977-977-9awFy77-9
