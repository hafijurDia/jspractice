// class Common{
//     name;
//     location;
//     constructor(name,location){
//         this.name = name;
//         this.location = location;
//     }
//     moduleQuize(num){
//         console.log(`module quize number ${num}`);
//     }
// }

// class Teacher extends Common{
//     designation = 'web developer';
//     team = 'web';
//     constructor(name,location,region){
//         super(name,location);
//         this.region = region
//     }
//     startSupportSession(time){
//         console.log(`star your support session at ${time}`);
//     }
// }

// class Developer extends Common{
//     designation = 'web developer';
//     team = 'developer';
//     constructor(name,location,tech){
//         super(name,location);
//         this.tech = tech;

//     }
//     delopeApp(appname){
//         console.log(`we are doing ${appname}`);
//     }
// }

// class Assistand extends Common{
//     designation = 'guard the office';
//     team = 'office Assistand';
//     constructor(name,location,shift){
//         super(name,location);
//         this.shift = shift;
//     }
//     openOffice(time){
//         console.log(`openOffice at ${time}`);
//     }
// }

// const hafijur = new Assistand('rahim','kendua','night');
// console.log(hafijur); 
// hafijur.openOffice('10:00');
// hafijur.moduleQuize(50);

let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

const result = data.Sophia.study[1].secondary[1].location;
console.log(result);

