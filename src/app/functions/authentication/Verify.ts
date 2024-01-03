import { verify as verifyJWT } from 'jsonwebtoken';

export default function Verify(jsonwebtoken: string) {
	return verifyJWT(jsonwebtoken, process.env.AUTH_SECRET as string);
}
