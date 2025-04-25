export interface IUserState {
    username: string;
    accessToken: string;
    refreshToken: string;
    roles: string[]; // Array<string>
}
