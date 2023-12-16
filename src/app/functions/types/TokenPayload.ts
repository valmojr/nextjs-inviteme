type TokenPayload = {
    id: string;
    username: string;
    avatar: string | null;
    issued_at: number;
    expire_date: number;
};

export default TokenPayload;