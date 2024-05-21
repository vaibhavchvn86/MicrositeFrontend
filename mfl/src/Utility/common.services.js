export const commonServices = {
    importImage
}

function importImage(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}