import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}
