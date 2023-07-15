// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;


    }
    attack(){

        return this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;// esto me ha costado mucho tiempo de investigar pero lo he conseguido

    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health,strength){
        super(health,strength)
        this.name=name;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health >0){
            return `${this.name} has received ${theDamage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }


    }
    battleCry(){
        return "Odin Owns You All!";
    }
}
//iteration 3:me ha resultado más sencilla
// Saxon

class Saxon extends Soldier {
    constructor(health,strength){
        super(health, strength)
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health >0){
            return `A Saxon has received ${theDamage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }


    }

}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);

    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);

    }
    vikingAttack(){//aquí estoy dando palos de ciego
        let randomIndexSaxon= Math.floor(Math.random() * this.saxonArmy.length )
    }
    saxonAttack(){}
    showStatus(){//he intenado esto pero solo se me pone en verde el último
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century! "
        }else if(this.vikingArmy.length ===0){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
