import "@testing-library/jest-dom";

// Mock the date which is imported from environment variable
const mockDate = "1970-01-01 00:00:00 +0100";
jest.mock("./src/util/util", () => ({
    getEnvValue: jest.fn((key: string) => {
        if (key === "VITE_LAST_UPDATED") {
            return mockDate;
        }
        return null;
    }),
    getRelativeTime: jest.fn((timestamp: string) => `${timestamp} time ago.`)
}));
