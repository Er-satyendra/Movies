type StorageKey = string;

export const setStorage = <T>(key: StorageKey, value: T): void => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error(`Error setting item in localStorage: ${error}`);
    }
};

export const getStorage = <T>(key: StorageKey): T | null => {
    try {
        const serializedValue = localStorage.getItem(key);
        if (!serializedValue) {
            return null;
        }
        return JSON.parse(serializedValue) as T;
    } catch (error) {
        console.error(`Error getting item from localStorage: ${error}`);
        return null;
    }
};

export const removeStorage = (key: StorageKey): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing item from localStorage: ${error}`);
    }
};

export const clearStorage = (): void => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error(`Error clearing localStorage: ${error}`);
    }
};
