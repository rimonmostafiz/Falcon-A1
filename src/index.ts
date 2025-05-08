function formatString(input: string, toUpper?: boolean): string {
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

