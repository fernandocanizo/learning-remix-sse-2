import type { LinksFunction } from "@remix-run/node";

import { useEffect } from "react"

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { eventNames } from "~/global.names"

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = async () => {
  console.debug(process.env.NODE_ENV)

  return {
    sseLogging: process.env.NODE_ENV === "development",
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  const { sseLogging } = useLoaderData<typeof loader>()

  useEffect(() => {
    // only establish a connection if sseLogging is turned on
    if (!sseLogging) return;
    const source = new EventSource("/logs");
    const handler = (e: MessageEvent) => {
      try {
        // attempt to parse the incoming message as json
        console.log(JSON.parse(e.data));
      } catch (err) {
        // otherwise log it as is
        console.log(e.data);
      }
    };
    source.addEventListener(eventNames.log, handler);

    return () => {
      source.removeEventListener(eventNames.log, handler);
      source.close();
    };
  }, [sseLogging]);

  return <Outlet />;
}
