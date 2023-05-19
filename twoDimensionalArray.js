
// // // practice task 2
// // let data =
// //     [
// //         {
// //             "pHeroCourses": {
// //                 "course-x": "web development"
// //             }
// //         },
// //         {
// //             "pHeroCourses": {
// //                 "course-y": "phitron"
// //             }
// //         },
// //         {
// //             "pHeroCourses": {
// //                 "course-z": "acc"
// //             }
// //         },
// //         {
// //             "pHeroCourses": {
// //                 "course-xyz": "level-2"
// //             },
// //             "locationField": {
// //                 "en-US": {
// //                     "lat": 19.28563,
// //                     "lon": 72.8691
// //                 }
// //             }
// //         }
// //     ]

// //     let level2Value = null;
// //     let lonValue = null;
// //     for (let i = 0; i < data.length; i++) {
// //         if (data[i].pHeroCourses && data[i].pHeroCourses['course-xyz'] == "level-2") {
// //             level2Value = "level-2";
// //         }
// //         if (data[i].locationField && data[i].locationField['en-US'] && data[i].locationField['en-US'].lon) {
// //             lonValue = data[i].locationField["en-US"].lon;
// //         }

// //     }
// //     console.log("Level-2:", level2Value);
// // console.log("Lon:", lonValue);

// // practice task 3

// // let activities = {
// //     activity1: [
// //         {
// //             name: "listen on spotify",
// //             song_list: {

// //                 song_1: "abc",
// //                 song_2: "bcd"

// //             },
// //             id: 1
// //         },
// //         {
// //             name: "listen music through bot",

// //             song_list: {
// //                 song_1: "wxy",
// //                 song_2: "xyz"

// //             },
// //             id: 2
// //         }
// //     ]
// // }
// // let abcValue = activities.activity1[0].song_list.song_1;
// // let xyzValue = activities.activity1[1].song_list.song_2;

// // console.log("abc:", abcValue);
// // console.log("xyz:", xyzValue);


// let students = {
//     2222: {

//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {

//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }

//     },
//     3333: {

//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//     "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }

//     }
// }

// let petersburgValue = students[2222].address.city;
// let herryValue = students[3333].name;

// console.log("Petersburg:", petersburgValue);
// console.log("Herry:", herryValue);

// let instructor = {
//     name: "Jhankar Mahbub",
//     entrepreneur: true,
//     additionalData: {
//         writer: true,
//         favoriteHobbies: ["travelling", "Coding"],
//         books: ["programming er bolod to bos", "programming er coddogosti"],
//     moreDetails: {
//                 favoriteBasketballTeam: "XYZ",
//                 isYoungest: true,
//                 hometown: {
//                     city: "ABC",
//                     state: "VW",
//                 },
//                 countriesLivedIn: ["Bangladesh", "New York"]
//             }
//     }
// }

// const result1 = instructor.additionalData.books[1];

// const result2 = instructor.additionalData.moreDetails.hometown.state;
// const result3 = instructor.additionalData.moreDetails.countriesLivedIn[0];

// console.log(result1);
// console.log(result2);
// console.log(result3);


const studentData = [

    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]

let bValue = null;
let dValue = null;

for (let i = 0; i < studentData.length; i++) {
    const details = studentData[i].details;
    for (let j = 0; j < details.length; j++) {
        const gradingDetails = details[j].gradingDetails;
        let grade = gradingDetails[0].grade;
        if (grade === 'B' && !bValue) {
            bValue = grade;
        }else if (grade === 'D' && !dValue) {
            dValue = grade;
        }
        
    }
    
}

console.log("B:", bValue);
console.log("D:", dValue);