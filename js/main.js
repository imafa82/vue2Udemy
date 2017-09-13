new Vue({
    el: 'main',
    data: {
        text: "Ciao Mondo", 
        name : "default", 
        note: 5,
        newFilm : null,
        viewNew: null,
        films : ["Batman v Superman", "L'allenatore nel Pallone", "Spiderman"],
        fruits: [
            {name: "mela", season: "Inverno" , price: 20},
            {name: "pera", season: "Inverno" , price: 22},
            {name: "ciliegie", season: "Estate" , price: 30},
            {name: "fragole", season: "Estate" , price: 30},
        ]
    },
    methods : {
        createFilm(){
            this.films.push(this.newFilm);
        },
        deleteFilm(index){   
            alert(index);
        },
        showNewFilm(){
            this.viewNew = true;
        }
    }
});