import { cookies } from "next/headers";

async function BackendFetch(route: RequestInfo, options?: RequestInit) {
  if (route.toString().charAt(0) !== '/') {
    route = `/${route}`;
  }

  const response = await fetch(`${process.env.BACKEND_URI}${route}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${cookies().get('token')?.value}`,
    },
  });

  try {
    return await response.json();
  } catch (error) {
    return response;
  }
};

export default BackendFetch;
