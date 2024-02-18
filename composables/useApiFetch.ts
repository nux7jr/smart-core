export const useApiFetch = (path: string, options: {}) => {
    const appConfig = useAppConfig();
    return useFetch(appConfig.url.baseApiUrl + path, {
        ...options
    });
}