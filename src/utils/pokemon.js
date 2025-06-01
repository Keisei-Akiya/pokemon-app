// ポケモンのデータを取得する関数
export function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}
// 各ポケモンの詳細なデータを取得する関数
export function getPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
            // console.log(data);
            resolve(data);
        })
            .catch(err => reject(err));
    });
}
