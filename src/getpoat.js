export function Getpoet(poets) {
    const sgaeerinfo = [];

    for (let i = 0; i < poets.length; i++) {
        const poet = poets[i];
        sgaeerinfo.push({
            id: poet.id,
            name: poet.nickname,
            image: `https://ganjgah.ir${poet.imageUrl}`,
        });
    }
    return sgaeerinfo;
}
