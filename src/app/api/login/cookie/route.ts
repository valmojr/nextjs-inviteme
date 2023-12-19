import GetCode from "@/app/(routes)/login/redirect/GetCode";
import { GetToken, GetUser, TokenResponse } from "@/app/functions/authentication/OAuth2";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    const {code} = JSON.parse(await request.text());
    console.log(code);
    const tokenResponse = await GetToken(code);
    console.log(tokenResponse)
    const user = await GetUser(tokenResponse);
    console.log(user);

    cookies().set('token', JSON.stringify(user));

    return new Response(JSON.stringify(user))
}