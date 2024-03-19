import { verify as verifyJWT } from 'jsonwebtoken';

export default function Verify(jsonwebtoken?: string) {
	if (!jsonwebtoken) {
		throw new Error('No token provided');
	}
	return verifyJWT(jsonwebtoken, process.env.AUTH_SECRET as string);
}
