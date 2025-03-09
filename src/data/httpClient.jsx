const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWEwNDM0ZDhiNDIxNDQ3YzNjMzhlNDY5YzY2ZTQwNyIsIm5iZiI6MTc0MDI2ODE1OC42NjgsInN1YiI6IjY3YmE2MjdlZDM2MzE2OTQ2NjQ2NWYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.94QUJD1ofWr8ArCi0X7tQ73BZlWC2A75cRhgpW4lTzo",
                "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}