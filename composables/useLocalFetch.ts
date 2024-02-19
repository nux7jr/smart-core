export const useLocalFetch = () => {
    return useAsyncData('post', () => queryContent('/post').findOne())
}