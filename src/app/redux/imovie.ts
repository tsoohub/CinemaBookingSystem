export interface IMovie {
    name: String,
    decs: String,
    genre: String,
    img: String,
    adult: Number,
    child: Number,
    schedule: [{ 
        startTime: String,
        totalSeat: Number,
    }]
};