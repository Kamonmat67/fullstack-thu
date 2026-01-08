class Media {
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;

    }
}



class Song extends Media{
    constructor(info){
        super(info);
        this.aritist = info.aritist;
    }
}

const info = new Song({
    aritist :'Queen',
    name :'Bohemian Rhapsody',
    publishDate : '1975'
});

console.log(info.name);
console.log(info);

// class Song extends Media{
//     constructor(songData){
//         super(songData);
//         this.aritist = songData.aritist;
//     }
// }

// const mySong = new Song({
//     aritist :'Queen',
//     name :'Bohemian Rhapsody',
//     publishDate : '1975'
// });

// console.log(mySong.name);
// console.log(mySong);