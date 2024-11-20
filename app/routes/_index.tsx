import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Login from "components/login";
import supabase from "utils/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const { data } = await supabase.from("messages").select();
  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();
  console.log(messages);
  return (
    <>
      <pre>
        <Login />
        {JSON.stringify(messages, null, 2)}
      </pre>
    </>
  );
}
