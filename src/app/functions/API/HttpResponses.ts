import { User } from '@prisma/client';
import { NextResponse } from 'next/server';

type UserResponse = {
	status?: number;
	message?: string;
	user?: User;
};

type ThrowedError = {
	status?: number;
	message?: string;
};

export default class HttpResponses {
	constructor() {}

	public UnauthorizedMethod() {
		return new NextResponse<ThrowedError>(
			JSON.stringify({
				status: 405,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 405,
					message: 'method not allowed',
				},
			})
		);
	}

	public Unauthorized() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 401,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 401,
					message: 'unauthorized',
				},
			})
		);
	}

	public BadRequest(customMessage?: string) {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 400,
					message:
						'bad request' +
						(customMessage ? `: ${customMessage}` : ''),
				},
			})
		);
	}

	public InternalServerError() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 500,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 500,
					message: 'internal server error',
				},
			})
		);
	}

	public Ok(body: UserResponse) {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 200,
					...body,
				},
			})
		);
	}

	public Created(body: any) {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 201,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 201,
					...body,
				},
			})
		);
	}

	public NoContent() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 204,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 204,
					message: 'no content',
				},
			})
		);
	}

	public NotFound() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 404,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 404,
					message: 'not found',
				},
			})
		);
	}

	public Conflict() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 409,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 409,
					message: 'conflict',
				},
			})
		);
	}

	public Forbidden() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 403,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 403,
					message: 'forbidden',
				},
			})
		);
	}

	public Gone() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 410,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 410,
					message: 'gone',
				},
			})
		);
	}

	public LengthRequired() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 411,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 411,
					message: 'length required',
				},
			})
		);
	}

	public PayloadTooLarge() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 413,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 413,
					message: 'payload too large',
				},
			})
		);
	}

	public RequestURITooLong() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 414,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 414,
					message: 'request uri too long',
				},
			})
		);
	}

	public UnsupportedMediaType() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 415,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 415,
					message: 'unsupported media type',
				},
			})
		);
	}

	public UnprocessableEntity() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 422,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 422,
					message: 'unprocessable entity',
				},
			})
		);
	}

	public TooManyRequests() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 429,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 429,
					message: 'too many requests',
				},
			})
		);
	}

	public ServiceUnavailable() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 503,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 503,
					message: 'service unavailable',
				},
			})
		);
	}

	public GatewayTimeout() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 504,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 504,
					message: 'gateway timeout',
				},
			})
		);
	}

	public HTTPVersionNotSupported() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 505,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 505,
					message: 'http version not supported',
				},
			})
		);
	}

	public VariantAlsoNegotiates() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 506,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 506,
					message: 'variant also negotiates',
				},
			})
		);
	}

	public InsufficientStorage() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 507,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 507,
					message: 'insufficient storage',
				},
			})
		);
	}

	public LoopDetected() {
		return new NextResponse<UserResponse>(
			JSON.stringify({
				status: 508,
				headers: {
					'Content-Type': 'application/json',
				},
				body: {
					status: 508,
					message: 'loop detected',
				},
			})
		);
	}
}
