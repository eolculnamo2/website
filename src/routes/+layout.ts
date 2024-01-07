import { currentRoute } from '../store/navigation';
import { get } from 'svelte/store';

function watchForPathChange() {
    if (typeof window === 'undefined') {
        return;
    }
    const observer = new MutationObserver((mutations) => {
        const newPath = location.pathname;
        if (newPath !== get(currentRoute)) {
            currentRoute.set(newPath);
        }
    });
    observer.observe(document, { subtree: true, childList: true });
}

export function load() {
    watchForPathChange();
}
