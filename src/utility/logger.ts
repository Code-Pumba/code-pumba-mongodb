export class Logger {
    static log(value: string) {
        console.log(`[${new Date(Date.now()).toLocaleTimeString()}][Database] ${value}`);
    }

    static error(value: string) {
        console.error(`[${new Date(Date.now()).toLocaleTimeString()}][Database] ${value}`);
    }
}
