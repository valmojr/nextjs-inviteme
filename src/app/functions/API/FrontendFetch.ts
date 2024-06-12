import { cookies } from "next/headers";

async function FrontendFetch(route: RequestInfo, options?: RequestInit) {
  if (route.toString().charAt(0) !== '/') {
    route = `/${route}`;
  }

  const response = await fetch(`${process.env.ENVIRONMENT_URI}${route}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${cookies().get('token')?.value}`,
      ...options?.headers,
    },
  });

  try {
    return await response.json();
  } catch (error) {
    return response;
  }
};

export default FrontendFetch;
