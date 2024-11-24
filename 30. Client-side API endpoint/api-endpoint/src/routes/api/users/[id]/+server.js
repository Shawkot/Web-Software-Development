import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
  return json({ hello: "shawkot", random: Math.random(), id: params.id });
}