class Teacher{
    name;
    designation = 'web developer';
    team = 'web';
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`star your support session at ${time}`);
    }
    moduleQuize(num){
        console.log(`module quize number ${num}`);
    }
}

const hafijur = new Teacher('Hafijur','Jamalpur');
console.log(hafijur); 
hafijur.startSupportSession('9:20');
hafijur.moduleQuize(50);
