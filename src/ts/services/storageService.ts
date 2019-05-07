export class StorageService {
    public static loadState = () => {
        try {
            const serializedState: string = localStorage.getItem("state");
            if (serializedState === null) {
                return {};
            }
            return JSON.parse(serializedState);
        } catch (err) {
            return {};
        }
    }

    public static saveState = (state: any) => {
        try {
            const serializedState: string = JSON.stringify(state);
            localStorage.setItem("state", serializedState);
        } catch {
            //
        }
    }
}